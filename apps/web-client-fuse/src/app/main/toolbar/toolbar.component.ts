import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {FuseConfigService} from '@sense-cm/fuse';
import {FuseSidebarService} from '@sense-cm/fuse';
import * as fromAppSelectors from '../../+state/app.selectors';
import {AppState} from '../../+state/app.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../../app-config';
import * as fromAppActions from '../../+state/app.actions';
import {RouterStateUrl} from "../../app.module";

@Component({
  selector: 'fuse-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class FuseToolbarComponent {
  appSettings$: Observable<AppConfig>;
  languages$: any;
  selectedLanguage$: any;
  showLoadingBar: boolean;
  horizontalNav: boolean;
  noNav: boolean;

  constructor(private router: Router,
              private sidebarService: FuseSidebarService,
              private appState: Store<AppState>,
              private routerState:Store<RouterStateUrl>
  ) {

    this.appSettings$ = appState.select(fromAppSelectors.selectFuseSettings);
    this.appSettings$.subscribe(settings => {
      this.horizontalNav = settings.layout.navigationPosition === 'top';
      this.noNav = settings.layout.navigationPosition === 'none';
    });
    this.selectedLanguage$ = appState.select(
      fromAppSelectors.selectSelectedLanguage
    );
    this.languages$ = appState.select(fromAppSelectors.selectLanguages);

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showLoadingBar = true;
      }
      if (event instanceof NavigationEnd) {
        this.showLoadingBar = false;
      }
    });
  }

  toggleSidebarOpened(key) {
    if (this.sidebarService.getSidebar(key).opened) {
      this.appState.dispatch(new fromAppActions.CloseNavigation());
    } else {
      this.appState.dispatch(new fromAppActions.OpenNavigation());
    }
  }

  search(value) {
    // Do your search here...
    console.log(value);
  }

  setLanguage(lang) {
    this.appState.dispatch(new fromAppActions.ChangeLanguage(lang.id));
  }
}
