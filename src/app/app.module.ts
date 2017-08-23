import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterModule } from './counter/counter.module';
import { CounterEffects } from './counter/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpWrapperModule } from '@briisk/http-wrapper';
import { localStorageSync } from 'ngrx-store-localstorage';

import 'rxjs/add/operator/mapTo';

export interface AppState {
  counter: CounterState;
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['counter'], rehydrate: true })(reducer);
}
const metaReducers = [ localStorageSyncReducer ];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HttpWrapperModule,
    StoreModule.forRoot(
      {
        router: routerReducer,
        counter: counterReducer,
      },
      {
        metaReducers,
      },
    ),
    EffectsModule.forRoot([ CounterEffects ]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
