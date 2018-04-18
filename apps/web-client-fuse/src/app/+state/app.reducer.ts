import { Action } from '@ngrx/store';
import { AppActions, AppActionTypes } from './app.actions';
import { fuseConfig, IFuseConfig } from '../fuse-config';
import * as _ from 'lodash';
/**
 * Interface for the 'App' data used in
 *  - AppState, and
 *  - appReducer
 */
export interface AppData {
  settings: IFuseConfig
}

/**
 * Interface to the part of the Store containing AppState
 * and other information related to AppData.
 */
export interface AppState {
  readonly app: AppData;
}

export const initialState: AppData = {
  settings: fuseConfig
};

export function appReducer(state = initialState, action: AppActions): AppData {
  switch (action.type) {
    case AppActionTypes.ChangeSettings: {
      const newState = _.merge({}, state);
      newState.settings ={...newState.settings,...action.settings}
      return newState;
    }
    default:
      return state;
  }
}
