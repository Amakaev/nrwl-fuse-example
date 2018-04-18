import { LayoutState } from './layout.reducer';
import * as _ from 'lodash';

export const selectSidenav = key => {
  return (state: LayoutState) => {
    return _.find(state.layout.sideNavs, s => s.navId === key);
  };
};
export const getNavigation = (state: LayoutState) => state.layout.navigation;
