import {TestBed} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {DataPersistence} from '@nrwl/nx';
import {hot} from '@nrwl/nx/testing';

import {AudienceEffects} from './audience.effects';
import {LoadAudiences, AudiencesLoaded} from './audience.actions';

import {Observable} from 'rxjs/Observable';
import {AudienceService} from "../audience.service";
import {HttpClientModule} from "@angular/common/http";

describe('AudienceEffects', () => {
  let actions$: Observable<any>;
  let effects$: AudienceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientModule],
      providers: [
        AudienceEffects,
        DataPersistence,
        AudienceService,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(AudienceEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {

    });
  });
});
