import { navigation } from "./navigation/navigation";
import { languages } from "prismjs";

/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be changed per component
 * basis. See `./login.component.ts` constructor method to learn more
 * about changing these options per component basis.
 */
export interface AppConfig {
    layout: { navigationPosition, toolbar, navigationFolded, navigationOpened, footer, mode, navigation, quickPanel?},
    colorClasses: { toolbar, navbar, footer },
    customScrollbars: boolean,
    routerAnimation: string,
    languages: any,
    selectedLanguage: any
}
export const fuseConfig: AppConfig = {
    layout: {
        navigation: navigation,
        navigationPosition: 'left', // 'right', 'left', 'top', 'none'
        navigationFolded: false, // true, false
        navigationOpened: true,
        toolbar: 'below', // 'above', 'below', 'none'
        footer: 'none', // 'above', 'below', 'none'
        mode: 'fullwidth', // 'boxed', 'fullwidth'
        quickPanel: false
    },
    colorClasses: {
        toolbar: 'mat-white-500-bg',
        navbar: 'mat-fuse-dark-700-bg',
        footer: 'mat-fuse-dark-900-bg'
    },
    languages: [
        {
            'id': 'en',
            'title': 'English',
            'flag': 'us'
        },
        {
            'id': 'he',
            'title': 'Hebrew',
            'flag': 'he'
        }
    ],
    selectedLanguage: 'en',
    customScrollbars: true,
    routerAnimation: 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
};
