// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ViewComponent as ViewComponentCustomElement, defineViewComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-view>` custom element. */
@Component({
  selector: 'forge-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ViewComponent {

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ViewComponentCustomElement>,
		protected zone: NgZone
	) {
		defineViewComponent();
		changeDetectorRef.detach();
	}
}
