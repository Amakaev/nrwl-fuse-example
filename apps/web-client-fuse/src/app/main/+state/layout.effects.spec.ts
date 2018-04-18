import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { LayoutEffects } from './layout.effects';

import { Observable } from 'rxjs/Observable';

describe('LayoutEffects', () => {
  let actions$: Observable<any>;
  let effects$: LayoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        LayoutEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(LayoutEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      //test body
    });
  });
});
