import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';
import { decrementCounter, incrementCounter, resetCounter } from '../../counter.actions';

@Component({
  selector: 'counter-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select(state => state.counter.value);
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }

  reset() {
    this.store.dispatch(resetCounter());
  }

}
