import { createAction, props } from '@ngrx/store';

export enum FormActions {
  FormSubmitted = '[form] - Form Submitted',
};

export const formSubmittedAction = createAction(
  FormActions.FormSubmitted,
  props<{ profile: {} }>());