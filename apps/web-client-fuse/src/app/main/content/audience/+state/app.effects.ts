import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AudienceActions, AudienceActionTypes, LoadAudiences, AudiencesLoaded } from './app.actions';
import { AudienceState } from './app.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class AppEffects {

  @Effect()
  loadApp$ = this.dataPersistence.fetch(AudienceActionTypes.LoadAudiences, {
    run: (action: LoadAudiences, state: AudienceState) => {
      return new AudiencesLoaded(state);
    },

    onError: (action: LoadAudiences, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AudienceState>
  ) {}
}
