import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FuseConfigService } from '@sense-cm/fuse';
import { FuseSidebarService } from '@sense-cm/fuse';
import * as fromAppSelectors from '../../+state/app.selectors'
import { AppState } from '../../+state/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app-config';


@Component({
    selector: 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class FuseToolbarComponent {
    appSettings$: Observable<AppConfig>;
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    noNav: boolean;


    constructor(
        private router: Router,
        private fuseConfig: FuseConfigService,
        private sidebarService: FuseSidebarService,
        private translate: TranslateService,
        private appState: Store<AppState>
    ) {

        this.appSettings$ = appState.select(fromAppSelectors.selectFuseSettings);
        this.appSettings$.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigationPosition === 'top';
            this.noNav = settings.layout.navigationPosition === 'none';
        });


        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'tr',
                'title': 'Turkish',
                'flag': 'tr'
            }
        ];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });



    }

    toggleSidebarOpened(key) {
        this.sidebarService.getSidebar(key).toggleOpen();
    }

    search(value) {
        // Do your search here...
        console.log(value);
    }

    setLanguage(lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);
    }
}
