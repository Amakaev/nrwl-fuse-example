import { Action } from '@ngrx/store';
import { AppConfig } from '../app-config';

export enum AppActionTypes {
  ChangeSettings = '[App] Change Settings',
  ChangeLanguage = '[App] Change Language',

  OpenNavigation = '[App Layout] Open navigation',
  CloseNavigation = '[App Layout] Close navigation',
  FoldNavigation = '[App Layout] Fold navigation',
  UnfoldNavigation = '[App Layout] Unfold navigation'
}

export class ChangeSettigns implements Action {
  readonly type = AppActionTypes.ChangeSettings;
  constructor(public settings: any) {}
}
export class OpenNavigation implements Action {
  readonly type = AppActionTypes.OpenNavigation;
}

export class CloseNavigation implements Action {
  readonly type = AppActionTypes.CloseNavigation;
}
export class FoldNavigation implements Action {
  readonly type = AppActionTypes.FoldNavigation;
}

export class UnfoldNavigation implements Action {
  readonly type = AppActionTypes.UnfoldNavigation;
}
export class ChangeLanguage implements Action {
  readonly type = AppActionTypes.ChangeLanguage;
  constructor(public lang: string) {}
}

export type AppActions =
  | ChangeSettigns
  | OpenNavigation
  | CloseNavigation
  | FoldNavigation
  | ChangeLanguage
  | UnfoldNavigation;
