import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { CounterState } from './counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterModule } from './counter/counter.module';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpWrapperModule } from '@briisk/http-wrapper';
import { localStorageSync } from 'ngrx-store-localstorage';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/mapTo';
import { translateConfig } from './setup/translate.config';



export interface AppState {
  counter: {
    show: CounterState,
  };
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
    HttpClientModule,
    HttpWrapperModule,
    StoreModule.forRoot(
      {
        router: routerReducer,
      },
      {
        metaReducers,
      },
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument(),
    translateConfig,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
