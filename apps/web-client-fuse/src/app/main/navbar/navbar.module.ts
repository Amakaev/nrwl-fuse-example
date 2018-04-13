import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@sense-cm/fuse';

import { FuseNavbarComponent } from './navbar.component';
import { FuseNavigationModule } from '@sense-cm/fuse';

@NgModule({
    declarations: [
        FuseNavbarComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseNavigationModule
    ],
    exports     : [
        FuseNavbarComponent
    ]
})
export class FuseNavbarModule
{
}
