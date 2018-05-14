import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { INCREMENT, setValueInCounter } from './counter.actions';
import { mapTo } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CounterEffects {
  @Effect() login$: Observable<Action> = this.actions$
    .ofType(INCREMENT).pipe(
      mapTo(setValueInCounter({ value: 2 })),
    );

  constructor(
    private actions$: Actions,
  ) {}
}
