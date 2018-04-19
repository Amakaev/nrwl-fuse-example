import { Action } from '@ngrx/store';
import { AppConfig } from '../app-config';

export enum AppActionTypes {
  ChangeSettings = '[App] Change Settings',
  ChangeLanguage = '[App] Change Language',

  OpenSidenav = '[App Layout] Open sidenav',
  CloseSidenav = '[App Layout] Close sidenav',
  FoldSidenav = '[App Layout] Fold sidenav',
  UnfoldSidenav = '[App Layout] Unfold sidenav'
}

export class ChangeSettigns implements Action {
  readonly type = AppActionTypes.ChangeSettings;
  constructor(public settings: any) {}
}
export class OpenSidenav implements Action {
  readonly type = AppActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = AppActionTypes.CloseSidenav;
}
export class FoldSidenav implements Action {
  readonly type = AppActionTypes.FoldSidenav;
}

export class UnfoldSidenav implements Action {
  readonly type = AppActionTypes.UnfoldSidenav;
}
export class ChangeLanguage implements Action {
  readonly type = AppActionTypes.ChangeLanguage;
  constructor(public lang: string) {}
}

export type AppActions =
  | ChangeSettigns
  | OpenSidenav
  | CloseSidenav
  | FoldSidenav
  | ChangeLanguage
  | UnfoldSidenav;
