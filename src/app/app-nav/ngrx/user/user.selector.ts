import { AppState } from '../app-state';
import { createSelector} from '@ngrx/store';
import { IUserState } from './user.reducer';

export const userState = (state: AppState) => state.user;

export const getUser = createSelector(
  userState,
  (state: IUserState) => state,
)
export const getName = createSelector(
  userState,
  (state: IUserState) => state?.name,
)