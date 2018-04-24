import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@sense-cm/fuse';
import { PeopleListComponent } from './list/people-list.component';
import { PersonDetailsComponent } from './details/person-details.component';

const routes = [
    {
        path: ':id',
        component: PersonDetailsComponent
    },
    {
        path: '**',
        component: PeopleListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule
    ],
    exports: [PeopleListComponent, PersonDetailsComponent],
    declarations: [PeopleListComponent, PersonDetailsComponent],
    providers: [],
})
export class PeopleModule { }
