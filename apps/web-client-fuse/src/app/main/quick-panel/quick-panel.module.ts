import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDividerModule, MatListModule, MatSlideToggleModule } from '@angular/material';

import { FuseSharedModule } from '@sense-cm/fuse';

import { FuseQuickPanelComponent } from './quick-panel.component';

@NgModule({
    declarations: [
        FuseQuickPanelComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,

        FuseSharedModule,
    ],
    exports: [
        FuseQuickPanelComponent
    ]
})
export class FuseQuickPanelModule
{
}
