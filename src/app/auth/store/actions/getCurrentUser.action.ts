import { createAction, props } from '@ngrx/store';
import { CurrentUSerInterface } from 'src/app/shared/types/currentUser.interface';
import { ActionTypes } from '../actionTypes';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURREN_SUCCESS,
  props<{ currentUser: CurrentUSerInterface }>()
);
export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURREN_FAILURE
);
