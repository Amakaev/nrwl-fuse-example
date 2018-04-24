import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@sense-cm/fuse';
import { AudienceListComponent } from './list/audience-list.component';
import { AudienceDetailsComponent } from './details/audience-details.component';


const routes = [
    {
        path: ':id',
        component: AudienceDetailsComponent
    },
    {
        path: '**',
        component: AudienceListComponent
    }
];

@NgModule({
    declarations: [
        AudienceListComponent,
        AudienceDetailsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule
    ],
    exports: [AudienceListComponent, AudienceDetailsComponent],
    providers: [],
})
export class AudienceModule { }
