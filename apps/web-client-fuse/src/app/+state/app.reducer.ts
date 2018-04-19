import { Action } from '@ngrx/store';
import { AppActions, AppActionTypes } from './app.actions';
import { fuseConfig, AppConfig } from '../app-config';
import * as _ from 'lodash';
/**
 * Interface for the 'App' data used in
 *  - AppState, and
 *  - appReducer
 */
export interface AppData {
  settings: AppConfig
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
      newState.settings = { ...newState.settings, ...action.settings }
      return newState;
    }
    case AppActionTypes.OpenSidenav: {
      let newState = _.merge({}, state);
      newState.settings.layout.navigationOpened = true;
      return newState;
    }
    case AppActionTypes.CloseSidenav: {
      let newState = _.merge({}, state);
      newState.settings.layout.navigationOpened = false;
      return newState;
    }
    case AppActionTypes.FoldSidenav: {
      let newState = _.merge({}, state);
      newState.settings.layout.navigationFolded = true;
      return newState;
    }
    case AppActionTypes.UnfoldSidenav: {
      let newState = _.merge({}, state);
      newState.settings.layout.navigationFolded = false;
      return newState;
    }
    case AppActionTypes.ChangeLanguage: {
      let newState: AppData = _.merge({}, state);
      newState.settings.selectedLanguage = action.lang;
      return newState;
    }
    default:
      return state;
  }
}
