import {NgModule} from '@angular/core';
import {NxModule} from '@nrwl/nx';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';
import {FuseSharedModule, FuseModule} from '@sense-cm/fuse';
import {fuseConfig} from './fuse-config';
import {AppComponent} from './app.component';
import {FuseMainModule} from './main/main.module';
import {FuseSampleModule} from './main/content/sample/sample.module';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'sample'
  }
];

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
    FuseModule.forRoot(fuseConfig),
    FuseSharedModule,
    FuseMainModule,
    FuseSampleModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
