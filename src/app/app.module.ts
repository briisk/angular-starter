import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterModule } from './counter/counter.module';

export interface AppState {
  counter: CounterState;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
