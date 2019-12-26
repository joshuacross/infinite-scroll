import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
