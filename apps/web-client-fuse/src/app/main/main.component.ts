import { Component, ElementRef, HostBinding, Inject, OnDestroy, Renderer2, ViewEncapsulation, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs/Subscription';

import { FuseConfigService, FuseSidebarService } from '@sense-cm/fuse';
import { Store } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import * as appSelectors from '../+state/app.selectors'
import * as layoutSelectors from './+state/layout.selectors'
import { Observable } from 'rxjs/Observable';
import { IFuseConfig } from '../fuse-config';
import { ChangeSettigns } from '../+state/app.actions';
import { LayoutState } from './+state/layout.reducer';
import { CloseSidenav, OpenSidenav, UnfoldSidenav, FoldSidenav } from './+state/layout.actions';
@Component({
    selector: 'fuse-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent implements OnDestroy, OnInit {

    fuseSettings: any;
    navigation$: any;
    private fuseSettings$: Observable<IFuseConfig>;
    @HostBinding('attr.fuse-layout-mode') layoutMode;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private platform: Platform,
        private appState: Store<AppState>,
        private layoutState: Store<LayoutState>,
        private sidebarService: FuseSidebarService,
        @Inject(DOCUMENT) private document: any
    ) {
        this.fuseSettings$ = appState.select(appSelectors.selectFuseSettings);
        this.navigation$ = layoutState.select(layoutSelectors.getNavigation);
        
        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }
    }

    ngOnDestroy() {
    }
    ngOnInit(): void {
    }

    addClass(className: string) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
    toggleSidebarOpened(key) {
        if (this.sidebarService.getSidebar(key).opened) {
            this.layoutState.dispatch(new CloseSidenav(key))
        } else {
            this.layoutState.dispatch(new OpenSidenav(key))
        }
    }

    onToggleSidebarFolded(key) {
        if (this.sidebarService.getSidebar(key).folded) {
            this.layoutState.dispatch(new UnfoldSidenav(key))
        } else {
            this.layoutState.dispatch(new FoldSidenav(key))
        }
    }
}
