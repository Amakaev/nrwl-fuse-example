import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@sense-cm/fuse';

import { locale as english } from './i18n/en';
import { locale as hebrew } from './i18n/he';

@Component({
    selector   : 'fuse-sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class FuseSampleComponent
{
    constructor(private fuseTranslationLoader: FuseTranslationLoaderService)
    {
        this.fuseTranslationLoader.loadTranslations(english, hebrew);
    }
}
