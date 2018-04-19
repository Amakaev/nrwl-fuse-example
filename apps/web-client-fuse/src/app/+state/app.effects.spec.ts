import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { AppEffects } from './app.effects';

import { Observable } from 'rxjs/Observable';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects$: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}),TranslateModule.forRoot(),],
      providers: [
        AppEffects,
        DataPersistence,
        TranslateService,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(AppEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      //test body
    });
  });
});
