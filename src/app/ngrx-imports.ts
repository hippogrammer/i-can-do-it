
import { storageMetaReducer } from './metaReducers';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { userReducer } from './app-nav/ngrx/user/user.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store'; 

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];

export const NGRX_IMPORTS = [
  StoreModule.forRoot({ user: userReducer }, { metaReducers }),
  StoreRouterConnectingModule.forRoot(),
];