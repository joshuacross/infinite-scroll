import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

@Component({
  template: `
      <div appInfiniteScroll [buffer]="20" [limit]="150"></div>
  `
})
class TestInfiniteScrollComponent {
}

describe('InfiniteScrollDirective', () => {
  let component: TestInfiniteScrollComponent;
  let fixture: ComponentFixture<TestInfiniteScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestInfiniteScrollComponent,
        InfiniteScrollDirective
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
