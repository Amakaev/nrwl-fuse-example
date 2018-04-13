import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@sense-cm/fuse';

import { FuseFooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FuseFooterComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        FuseSharedModule
    ],
    exports     : [
        FuseFooterComponent
    ]
})
export class FuseFooterModule
{
}
