import { Component, OnInit } from '@angular/core';
import { locale as english } from '../i18n/en';
import { locale as hebrew } from '../i18n/he';
import { FuseTranslationLoaderService } from '@sense-cm/fuse';
import { AudienceState } from '../+state/app.reducer';
import { Store } from '@ngrx/store';
import *  as fromActions from '../+state/app.actions';
@Component({
  selector: 'app-audience-list',
  templateUrl: './audience-list.component.html',
  styleUrls: ['./audience-list.component.scss']
})
export class AudienceListComponent implements OnInit {
  constructor(
    private fuseTranslationLoader: FuseTranslationLoaderService,
    private appState: Store<AudienceState>
  ) {
    this.fuseTranslationLoader.loadTranslations(english, hebrew);
  }

  ngOnInit(): void {
    this.appState.dispatch(new fromActions.AudiencesLoaded({}));
  }
}
