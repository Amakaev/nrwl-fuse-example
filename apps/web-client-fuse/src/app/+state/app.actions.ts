import { Action } from '@ngrx/store';
import { IFuseConfig } from '../fuse-config';

export enum AppActionTypes {
  ChangeSettings = '[App] Change Settings',
}

export class ChangeSettigns implements Action {
  readonly type = AppActionTypes.ChangeSettings;
  constructor(public settings: any) { }
}

export type AppActions = ChangeSettigns;
