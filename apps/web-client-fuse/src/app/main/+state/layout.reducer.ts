import { Action } from '@ngrx/store';
import * as _ from 'lodash';
import { LayoutActions, LayoutActionTypes } from './layout.actions';
import * as fromNavigation from '../../navigation/navigation';

/**
 * Interface for the 'Layout' data used in
 *  - LayoutState, and
 *  - layoutReducer
 */
export interface LayoutData {
  navigation: any;
  sideNavs: { navId; opened; folded }[];
}

/**
 * Interface to the part of the Store containing LayoutState
 * and other information related to LayoutData.
 */
export interface LayoutState {
  readonly layout: LayoutData;
}

export const initialState: LayoutData = {
  navigation: fromNavigation.navigation,
  sideNavs: [{ navId: 'navbar', opened: true, folded: false }]
};

export function layoutReducer(
  state = initialState,
  action: LayoutActions
): LayoutData {
  switch (action.type) {
    case LayoutActionTypes.OpenSidenav: {
      let newState = _.merge({}, state);
      _.find(newState.sideNavs, x => x.navId === action.navId).opened = true;
      return newState;
    }
    case LayoutActionTypes.CloseSidenav: {
      let newState = _.merge({}, state);
      _.find(newState.sideNavs, x => x.navId === action.navId).opened = false;
      return newState;
    }
    case LayoutActionTypes.FoldSidenav: {
      let newState = _.merge({}, state);
      _.find(newState.sideNavs, x => x.navId === action.navId).folded = true;
      return newState;
    }
    case LayoutActionTypes.UnfoldSidenav: {
      let newState = _.merge({}, state);
      _.find(newState.sideNavs, x => x.navId === action.navId).folded = false;
      return newState;
    }

    default:
      return state;
  }
}
