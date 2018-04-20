import {
  Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild,
  ViewEncapsulation, Renderer2
} from '@angular/core';
import {FuseSidebarComponent} from "@fuse/components/sidebar/sidebar.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit, OnChanges {


  @ViewChild(FuseSidebarComponent) fuseSidebar;

  @Input() opened;
  @Input() name;
  @Input() align;
  @Input() lockedOpen;
  @Input() ngClassObj;
  private _folded: boolean;

  @Input()
  set folded(value: boolean) {
    // Only work if the sidebar is not closed
    if (!this.opened) {
      return;
    }

    // Set the folded
    this._folded = value;

    // Programmatically add/remove margin to the element
    // that comes after or before based on the alignment
    let sibling,
      styleRule;

    const styleValue = '64px';

    // Get the sibling and set the style rule
    if (this.align === 'left') {
      sibling = this.elementRef.nativeElement.nextElementSibling;
      styleRule = 'marginLeft';
    }
    else {
      sibling = this.elementRef.nativeElement.previousElementSibling;
      styleRule = 'marginRight';
    }

    // If there is no sibling, return...
    if (!sibling) {
      return;
    }

    // If folded...
    if (value) {
      // Set the style
      this.renderer.setStyle(sibling, styleRule, styleValue);
    }
    // If unfolded...
    else {
      // Remove the style
      this.renderer.removeStyle(sibling, styleRule);
    }
  }

  get folded(): boolean {
    return this._folded;
  }


  constructor(private elementRef: ElementRef, private renderer: Renderer2,) {
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
