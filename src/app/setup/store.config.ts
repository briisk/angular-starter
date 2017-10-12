import { ActionReducer, StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { CounterState } from '../counter/counter.reducer';
import { EffectsModule } from '@ngrx/effects';

export interface AppState {
  counter: {
    show: CounterState,
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['counter'], rehydrate: true })(reducer);
}
const metaReducers = [ localStorageSyncReducer ];

export const storeConfig = StoreModule.forRoot(
  {
    router: routerReducer,
  },
  {
    metaReducers,
  },
);

export const effectsConfig = EffectsModule.forRoot([]);
