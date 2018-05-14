import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementCounter, incrementCounter, resetCounter } from '../../counter.actions';
import { AppState } from '../../../setup/store.config';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'counter-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select(state => state.counter.show.value);
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
