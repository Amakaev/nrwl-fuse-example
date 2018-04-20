import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
import {FuseSidebarComponent} from "@fuse/components/sidebar/sidebar.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit, OnChanges {


  @ViewChild(FuseSidebarComponent) fuseSidebar;

  @Input() opened;
  @Input() folded;
  @Input() name;
  @Input() align;
  @Input() lockedOpen;
  @Input() ngClassObj;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes['opened'].isFirstChange()) {

      if (changes['opened'].currentValue === true)
        this.fuseSidebar.open();
      else {
        this.fuseSidebar.close();
      }
    }
  }


  ngOnInit() {
  }
}
