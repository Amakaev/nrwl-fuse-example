import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {FuseSharedModule} from '@sense-cm/fuse';
import {AudienceListComponent} from './list/audience-list.component';
import {AudienceDetailsComponent} from './details/audience-details.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducer, initialState as appInitialState} from './+state/audience.reducer';
import {AudienceEffects} from './+state/audience.effects';
import {MatListModule} from "@angular/material";
import {AudienceService} from "./audience.service";


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
    MatListModule,
    StoreModule.forFeature('audience', appReducer, {initialState: appInitialState}),
    EffectsModule.forFeature([AudienceEffects])
  ],
  exports: [AudienceListComponent, AudienceDetailsComponent],
  providers: [AudienceEffects, AudienceService],
})
export class AudienceModule {
}
