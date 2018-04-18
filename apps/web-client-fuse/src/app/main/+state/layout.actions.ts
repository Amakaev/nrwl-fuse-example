import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open sidenav',
  CloseSidenav = '[Layout] Close sidenav',
  FoldSidenav = '[Layout] Fold sidenav',
  UnfoldSidenav = '[Layout] Unfold sidenav'
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;

  constructor(public navId) {}
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;

  constructor(public navId) {}
}
export class FoldSidenav implements Action {
  readonly type = LayoutActionTypes.FoldSidenav;

  constructor(public navId) {}
}

export class UnfoldSidenav implements Action {
  readonly type = LayoutActionTypes.UnfoldSidenav;

  constructor(public navId) {}
}

export type LayoutActions =
  | OpenSidenav
  | CloseSidenav
  | FoldSidenav
  | UnfoldSidenav;
