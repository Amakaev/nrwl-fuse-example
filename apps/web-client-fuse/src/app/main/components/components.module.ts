import {NgModule} from '@angular/core';

import {SidebarComponent} from './sidebar/sidebar.component';
import {FuseSidebarModule} from "@sense-cm/fuse";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    FuseSidebarModule,
    CommonModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent],
  providers: [],
})
export class ComponentsModule {
}
