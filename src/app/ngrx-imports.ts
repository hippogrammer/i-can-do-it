
import { storageMetaReducer } from './metaReducers';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { formReducer } from './form/ngrx/form.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store'; 

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];

export const NGRX_IMPORTS = [
  StoreModule.forRoot({ profile: formReducer }, { metaReducers }),
  StoreRouterConnectingModule.forRoot(),
];