import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NxModule} from '@nrwl/nx';
import {FuseModule, FuseSplashScreenService} from "@sense-cm/fuse";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const fuseConfig = {
  layout: {
    navigation: 'left', // 'right', 'left', 'top', 'none'
    navigationFolded: false, // true, false
    toolbar: 'below', // 'above', 'below', 'none'
    footer: 'below', // 'above', 'below', 'none'
    mode: 'fullwidth' // 'boxed', 'fullwidth'
  },
  colorClasses: {
    toolbar: 'mat-white-500-bg',
    navbar: 'mat-fuse-dark-700-bg',
    footer: 'mat-fuse-dark-900-bg'
  },
  customScrollbars: true,
  routerAnimation: 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
};

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    FuseModule.forRoot(fuseConfig)],
  declarations: [AppComponent],
  bootstrap:
    [AppComponent],
})

export class AppModule {
}
