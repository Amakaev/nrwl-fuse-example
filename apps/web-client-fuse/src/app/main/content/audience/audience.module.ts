import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@sense-cm/fuse';
import { AudienceListComponent } from './list/audience-list.component';
import { AudienceDetailsComponent } from './details/audience-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer, initialState as appInitialState } from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';


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
        FuseSharedModule,
        StoreModule.forFeature('audience', appReducer, { initialState: appInitialState }),
        EffectsModule.forFeature([AppEffects])
    ],
    exports: [AudienceListComponent, AudienceDetailsComponent],
    providers: [AppEffects],
})
export class AudienceModule { }
