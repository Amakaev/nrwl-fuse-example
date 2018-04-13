import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {FuseSplashScreenService, FuseTranslationLoaderService, FuseNavigationService} from '@sense-cm/fuse';

import {locale as navigationEnglish} from './navigation/i18n/en';
import {locale as navigationTurkish} from './navigation/i18n/tr';

@Component({
  selector: 'fuse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService,
              private fuseNavigationService: FuseNavigationService,
              private fuseSplashScreen: FuseSplashScreenService,
              private fuseTranslationLoader: FuseTranslationLoaderService) {
    // Add languages
    this.translate.addLangs(['en', 'tr']);

    // Set the default language
    this.translate.setDefaultLang('en');

    // Set the navigation translations
    this.fuseTranslationLoader.loadTranslations(navigationEnglish, navigationTurkish);

    // Use a language
    this.translate.use('en');
  }
}
