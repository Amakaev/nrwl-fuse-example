import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {AudienceActions, AudienceActionTypes, LoadAudiences, AudiencesLoaded} from './audience.actions';
import {AudienceState} from './audience.reducer';
import {DataPersistence} from '@nrwl/nx';
import {AudienceService} from "../audience.service";

@Injectable()
export class AudienceEffects {

  @Effect()
  loadAudiences$ = this.dataPersistence.fetch(AudienceActionTypes.LoadAudiences, {
    run: (action: LoadAudiences, state: AudienceState) => {
      return this.audienceService.getAudiences(action.filters).map((resp) => {
        return new AudiencesLoaded(resp);
      })
    },
    onError: (action: LoadAudiences, error) => {
      console.error('Error', error);
    }
  });

  constructor(private audienceService: AudienceService,
              private actions$: Actions,
              private dataPersistence: DataPersistence<AudienceState>) {
  }
}
