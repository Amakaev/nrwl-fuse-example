import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@sense-cm/fuse';

import { FuseContentComponent } from './content.component';

@NgModule({
    declarations: [
        FuseContentComponent
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
    ],
    exports: [
        FuseContentComponent
    ]
})
export class FuseContentModule
{
}
