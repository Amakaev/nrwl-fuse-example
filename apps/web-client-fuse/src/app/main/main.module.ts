import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material';

import {FuseSharedModule} from '@sense-cm/fuse';
import {FuseNavigationModule, FuseSearchBarModule, FuseSidebarModule} from '@sense-cm/fuse';


import {FuseMainComponent} from './main.component';
import {FuseFooterModule} from './footer/footer.module';
import {FuseContentModule} from './content/content.module';
import {FuseToolbarModule} from './toolbar/toolbar.module';
import {FuseQuickPanelModule} from './quick-panel/quick-panel.module';
import {FuseNavbarModule} from './navbar/navbar.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [
    FuseMainComponent,
  ],
  imports: [
    RouterModule,

    MatSidenavModule,

    FuseSharedModule,
    FuseNavigationModule,
    FuseSearchBarModule,
    FuseSidebarModule,
    FuseContentModule,
    FuseFooterModule,
    FuseNavbarModule,
    FuseQuickPanelModule,
    FuseToolbarModule,

    ComponentsModule,
  ],
  exports: [
    FuseMainComponent
  ],
  providers: []
})
export class FuseMainModule {
}
