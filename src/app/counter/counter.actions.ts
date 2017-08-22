import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter]: Increment';
export const DECREMENT = '[Counter]: Decrement';
export const RESET = '[Counter]: Reset';
export const SET_VALUE = '[Counter]: Set value';

interface SetValuePayload {
  value: number;
}

interface AnotherPayload {
  item: string;
}

export interface CounterAction extends Action {
  payload: SetValuePayload&AnotherPayload;
}

function newAction(type: string) {
  return (payload?: any): CounterAction => ({ payload, type });
}

export const incrementCounter: () => CounterAction = newAction(INCREMENT);
export const decrementCounter: () => CounterAction = newAction(DECREMENT);
export const resetCounter: () => CounterAction = newAction(RESET);
export const setValueInCounter: (payload: SetValuePayload) => CounterAction = newAction(SET_VALUE);
