import { createReducer, on, Action } from '@ngrx/store';

import { AuthStateInterface } from '../types/ authState.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReduce = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReduce(state, action);
}
