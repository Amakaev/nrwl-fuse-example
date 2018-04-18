import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  LayoutActionTypes,
  OpenSidenav,
  CloseSidenav,
  UnfoldSidenav,
  FoldSidenav
} from './layout.actions';
import { LayoutState } from './layout.reducer';
import { DataPersistence } from '@nrwl/nx';
import { FuseSidebarService } from '@sense-cm/fuse';

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LayoutState>
  ) {}
}
