import { Component, Input, OnDestroy, ViewChild, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FusePerfectScrollbarDirective } from '@sense-cm/fuse';
import { FuseSidebarService } from '@sense-cm/fuse';

import { FuseNavigationService } from '@sense-cm/fuse';
import { LayoutState } from "../+state/layout.reducer";
import { select, Store } from "@ngrx/store";
import { CloseSidenav, OpenSidenav, FoldSidenav, UnfoldSidenav } from "../+state/layout.actions";
import * as layoutSelectors from "../+state/layout.selectors";

@Component({
  selector: 'fuse-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseNavbarComponent implements OnDestroy, OnInit {

  private fusePerfectScrollbar: FusePerfectScrollbarDirective;

  @ViewChild(FusePerfectScrollbarDirective)
  set directive(theDirective: FusePerfectScrollbarDirective) {
    if (!theDirective) {
      return;
    }

    this.fusePerfectScrollbar = theDirective;

    this.navigationServiceWatcher =
      this.navigationService.onItemCollapseToggled.subscribe(() => {
        this.fusePerfectScrollbarUpdateTimeout = setTimeout(() => {
          this.fusePerfectScrollbar.update();
        }, 310);
      });
  }

  @Input() layout;
  @Input() navId;
  @Input() navigation: any;
  @Output() sideBarToggleOpened = new EventEmitter<string>()
  @Output() sideBarToggleFolded = new EventEmitter<string>()

  navigationServiceWatcher: Subscription;
  fusePerfectScrollbarUpdateTimeout;

  constructor(private sidebarService: FuseSidebarService,
    private navigationService: FuseNavigationService) {
    this.layout = 'vertical';
  }

  ngOnDestroy() {
    if (this.fusePerfectScrollbarUpdateTimeout) {
      clearTimeout(this.fusePerfectScrollbarUpdateTimeout);
    }

    if (this.navigationServiceWatcher) {
      this.navigationServiceWatcher.unsubscribe();
    }
  }
  ngOnInit(): void {
    //subscribe to nav state change

  }
  toggleSidebarOpened() {
    this.sideBarToggleOpened.emit(this.navId);
  }

  toggleSidebarFolded() {
    this.sideBarToggleFolded.emit(this.navId);
  }
}
