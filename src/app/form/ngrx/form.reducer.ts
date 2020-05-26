import {createReducer, on, Action } from '@ngrx/store';
import {formSubmittedAction } from './form.actions';

export interface IFormState {
  name: string;
  email: string;
  phone: string;
  ext?: string;
  jobTitle: string;
  company?: string;
}

export const initialState = {};
const _formReducer = createReducer(initialState,
  on(formSubmittedAction, (state, {profile}) => {
    return {...profile, ...state};
  }));

export function formReducer(
  state: IFormState,
  action: Action,
){
  return _formReducer(state, action);
}