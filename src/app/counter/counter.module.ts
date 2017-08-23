import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShowComponent } from './components/show/show.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter.effects';

@NgModule({
  declarations: [
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('counter', {
      show: counterReducer,
    }),
    EffectsModule.forFeature([ CounterEffects ]),
  ],
  exports: [
    ShowComponent,
  ],
})
export class CounterModule { }
