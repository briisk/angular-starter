import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterModule } from './counter/counter.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpWrapperModule } from '@briisk/http-wrapper';
import { HttpClientModule } from '@angular/common/http';
import { translateConfig } from './setup/translate.config';
import { effectsConfig, storeConfig } from './setup/store.config';

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
    storeConfig,
    effectsConfig,
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument(),
    translateConfig,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
