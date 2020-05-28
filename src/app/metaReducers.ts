import { ActionReducer, Action } from '@ngrx/store';
import {merge, pick} from 'lodash';
const appKey = "BekahsProfilePage";
const stateKeys = ['user'];
export function saveToLocalStorage(state, appKey) {
  localStorage.setItem(appKey, JSON.stringify(state));
}

export function loadStatefromLocalStorage(appKey: string) {
  return JSON.parse(localStorage.getItem(appKey));
}

export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>) {
  let onInit = true;
  return function(state: S, action: A): S {
    const nextState = reducer(state, action);
    if (onInit) {
      onInit = false;
      const savedState = loadStatefromLocalStorage(appKey);
      return merge(nextState, savedState);
    }
    const stateToSave = pick(nextState, stateKeys);
    saveToLocalStorage(stateToSave, appKey);
    return nextState;
  }
}