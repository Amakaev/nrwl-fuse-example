import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import {FuseToolbarComponent} from './toolbar.component';
import {FuseSearchBarModule, FuseSharedModule} from '@sense-cm/fuse';

@NgModule({
  declarations: [
    FuseToolbarComponent
  ],
  imports: [
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule,

    FuseSharedModule,
    FuseSearchBarModule
  ],
  exports: [
    FuseToolbarComponent
  ]
})
export class FuseToolbarModule {
}
