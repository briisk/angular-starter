import { CounterAction, DECREMENT, INCREMENT, RESET, SET_VALUE } from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export function counterReducer(state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };

    case DECREMENT:
      return { ...state, value: state.value - 1 };

    case SET_VALUE:
      return { ...state, value: action.payload.value };

    case RESET:
      return { ...state, value: 0 };

    default:
      return state;
  }
}
