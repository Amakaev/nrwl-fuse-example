import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Platform} from '@angular/cdk/platform';
import {Subscription} from 'rxjs/Subscription';

import {FuseConfigService, FuseSidebarService} from '@sense-cm/fuse';
import {Store} from '@ngrx/store';
import {AppState} from '../+state/app.reducer';
import * as fromAppSelectors from '../+state/app.selectors'
import {Observable} from 'rxjs/Observable';
import {AppConfig} from '../app-config';
import {ChangeSettigns, CloseSidenav, OpenSidenav, UnfoldSidenav, FoldSidenav} from '../+state/app.actions';

@Component({
  selector: 'fuse-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent {

  navigation$: any;
  appSettings$: Observable<AppConfig>;
  navBarName = 'navbar';
  @HostBinding('attr.fuse-layout-mode') layoutMode;

  constructor(private _renderer: Renderer2,
              private _elementRef: ElementRef,
              private platform: Platform,
              private appState: Store<AppState>,
              private sidebarService: FuseSidebarService,
              @Inject(DOCUMENT) private document: any) {
    this.appSettings$ = appState.select(fromAppSelectors.selectFuseSettings);
    this.navigation$ = appState.select(fromAppSelectors.selectNavigation);

    if (this.platform.ANDROID || this.platform.IOS) {
      this.document.body.className += ' is-mobile';
    }
  }

  addClass(className: string) {
    this._renderer.addClass(this._elementRef.nativeElement, className);
  }

  removeClass(className: string) {
    this._renderer.removeClass(this._elementRef.nativeElement, className);
  }

  toggleSidebarOpened(key) {
    if (this.sidebarService.getSidebar(key).opened) {
      this.appState.dispatch(new CloseSidenav())
    } else {
      this.appState.dispatch(new OpenSidenav())
    }
  }

  onToggleSidebarFolded(key) {
    const sidebar = this.sidebarService.getSidebar(key);
    if (sidebar.folded) {
      this.appState.dispatch(new UnfoldSidenav())
    } else {
      this.appState.dispatch(new FoldSidenav())
    }
  }
}
