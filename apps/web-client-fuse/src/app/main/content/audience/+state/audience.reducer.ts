import {Action} from '@ngrx/store';
import {AudienceActions, AudienceActionTypes} from './audience.actions';
import * as _ from 'lodash';

export interface AudienceListModel {
  showProgress: boolean,
  sidebar: any,
  items: any[],
  skip: number,
  take: number,
  totalItems: number
  filters: {}
}

/**
 * Interface for the 'App' data used in
 *  - AppState, and
 *  - appReducer
 */
export interface AudienceData {
  list: AudienceListModel
}

/**
 * Interface to the part of the Store containing AppState
 * and other information related to AppData.
 */
export interface AudienceState {
  readonly audience: AudienceData;
}

export const initialState: AudienceData = {
  list: {
    showProgress: false,
    filters: {},
    items: [],
    sidebar: {opened: true},
    skip: 0,
    take: 20,
    totalItems: 0
  }
};

export function appReducer(state = initialState, action: AudienceActions): AudienceData {
  switch (action.type) {
    case AudienceActionTypes.LoadAudiences: {
      let newState = _.merge({}, state);
      newState.list.showProgress = true;
      return newState;
    }

    case AudienceActionTypes.AudiencesLoaded: {
      let newState = _.merge({}, state);
      newState.list.showProgress = false;
      newState.list.items = action.payload;
      return newState;
    }

    default:
      return state;
  }
}
