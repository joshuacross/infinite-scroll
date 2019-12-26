import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, EventEmitter, Inject, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, sampleTime, tap } from 'rxjs/operators';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements AfterViewInit {
  /* The percentage of scroll height remaining before the event is emitted */
  @Input() buffer = 20;
  /* The event emission limiting period in milliseconds */
  @Input() limit = 150;
  /* Listen to window for scroll events */
  @Input() window = true;

  @Output() scrollLimitReached = new EventEmitter();

  private lastScrollTop: number;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    this.lastScrollTop = this.document.documentElement.scrollTop;

    fromEvent(window, 'scroll')
      .pipe(
        sampleTime(this.limit),
        filter(() => this.document.documentElement.scrollTop > this.lastScrollTop),
        tap(() => this.lastScrollTop = this.document.documentElement.scrollTop)
      )
      .subscribe(() => this.checkScrollHeight(this.document.documentElement));
  }

  checkScrollHeight(element: HTMLElement): void {
    const bufferHeight = element.scrollHeight * this.buffer / 100;
    if ((element.scrollHeight - bufferHeight) - element.scrollTop <= element.clientHeight) {
      this.scrollLimitReached.emit();
    }
  }
}
