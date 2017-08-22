import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [
    ShowComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    ShowComponent,
  ],
})
export class CounterModule { }
