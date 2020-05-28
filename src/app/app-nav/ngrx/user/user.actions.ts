import { createAction, props } from '@ngrx/store';

export enum UserActions {
  FormSubmitted = '[form] - Form Submitted',
};

export const formSubmittedAction = createAction(
  UserActions.FormSubmitted,
  props<{ user: {} }>());