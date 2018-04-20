import {NgModule} from '@angular/core';
import {NxModule} from '@nrwl/nx';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Params, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';
import {FuseSharedModule, FuseModule} from '@sense-cm/fuse';
import {appConfig} from './app-config';
import {AppComponent} from './app.component';
import {FuseMainModule} from './main/main.module';
import {FuseSampleModule} from './main/content/sample/sample.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducer, initialState as appInitialState} from './+state/app.reducer';
import {AppEffects} from './+state/app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {
  routerReducer, RouterReducerState, RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'sample'
  }
];

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const {url, root: {queryParams}} = routerState;
    const {params} = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return {url, params, queryParams};
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot(),

    // Fuse Main and Shared modules
    FuseModule.forRoot(appConfig),
    FuseSharedModule,
    FuseMainModule,
    FuseSampleModule,
    StoreModule.forRoot(
      {app: appReducer, router: routerReducer},
      {
        initialState: {app: appInitialState},
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [AppEffects, {provide: RouterStateSerializer, useClass: CustomSerializer}]
})
export class AppModule {
}
