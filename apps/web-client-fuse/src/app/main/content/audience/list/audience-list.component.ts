import {Component, OnInit} from '@angular/core';
import {locale as english} from '../i18n/en';
import {locale as hebrew} from '../i18n/he';
import {FuseTranslationLoaderService} from '@sense-cm/fuse';
import {AudienceListModel, AudienceState} from '../+state/audience.reducer';
import {Store} from '@ngrx/store';
import *  as fromActions from '../+state/audience.actions';
import *  as fromSelectors from '../+state/audience.selectors';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-audience-list',
  templateUrl: './audience-list.component.html',
  styleUrls: ['./audience-list.component.scss']
})
export class AudienceListComponent implements OnInit {
  audiences$: Observable<any[]>;

  constructor(private fuseTranslationLoader: FuseTranslationLoaderService,
              private appState: Store<AudienceState>) {
    this.fuseTranslationLoader.loadTranslations(english, hebrew);
    this.appState.dispatch(new fromActions.LoadAudiences({}));
    this.audiences$ = this.appState.select(fromSelectors.selectAudiences)
  }

  ngOnInit(): void {

  }
}
