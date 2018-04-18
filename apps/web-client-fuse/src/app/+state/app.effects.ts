import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppActions, AppActionTypes } from './app.actions';
import { AppState } from './app.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppState>
  ) { }
}
