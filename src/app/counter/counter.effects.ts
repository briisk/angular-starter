import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { INCREMENT, setValueInCounter } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect() login$: Observable<Action> = this.actions$
    .ofType(INCREMENT)
    .mapTo(setValueInCounter({ value: 2 }));

  constructor(
    private actions$: Actions,
  ) {}
}
