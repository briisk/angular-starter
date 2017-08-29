import { CounterAction, DECREMENT, INCREMENT, RESET, SET_VALUE, SetValuePayload } from './counter.actions';
import { evolve, dec, assoc } from 'ramda';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const actions = {
  [INCREMENT]: () => (state: CounterState) => ({ ...state, value: state.value + 1 }),
  [DECREMENT]: () => evolve<CounterState>({ value: dec }),
  [SET_VALUE]: (payload: SetValuePayload) => assoc('value', payload.value),
  [RESET]: () => assoc('value', 0),
};

export function counterReducer(state: CounterState = initialState, action: CounterAction): CounterState {
  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn(action.payload)(state) : state;
}
