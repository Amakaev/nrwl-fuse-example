import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppActions, AppActionTypes, ChangeLanguage } from './app.actions';
import { AppState } from './app.reducer';
import { DataPersistence } from '@nrwl/nx';
import { TranslateService } from '@ngx-translate/core';

@Injectable()



export class AppEffects {
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppState>,
    private translate: TranslateService,
  ) { }


  @Effect({ dispatch: false })
  changelang$ = this.dataPersistence.fetch(AppActionTypes.ChangeLanguage, {
    run: (action: ChangeLanguage, state: AppState) => {
      this.translate.use(action.lang)
    }
  });
}
