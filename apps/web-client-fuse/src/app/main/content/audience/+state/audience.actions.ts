import {Action} from '@ngrx/store';

export enum AudienceActionTypes {
  LoadAudiences = '[Audience] Load Audiences',
  AudiencesLoaded = '[Audience] Audiences Loaded'
}

export class LoadAudiences implements Action {
  readonly type = AudienceActionTypes.LoadAudiences;

  constructor(public filters: {}) {
  }
}

export class AudiencesLoaded implements Action {
  readonly type = AudienceActionTypes.AudiencesLoaded;

  constructor(public payload: any) {
  }
}

export type AudienceActions = LoadAudiences | AudiencesLoaded;
