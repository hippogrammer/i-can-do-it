import {createReducer, on, Action } from '@ngrx/store';
import {formSubmittedAction } from './user.actions';

export interface IUserState {
  name: string;
  email: string;
  phone: string;
  ext?: string;
  jobTitle: string;
  company?: string;
}

export const initialState = {};
const _userReducer = createReducer(initialState,
  on(formSubmittedAction, (state, {user}) => {
    return {...user, ...state};
  }));

export function userReducer(
  state: IUserState,
  action: Action,
){
  return _userReducer(state, action);
}