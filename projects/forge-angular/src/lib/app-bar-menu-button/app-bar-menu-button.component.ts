// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { AppBarMenuButtonComponent as AppBarMenuButtonComponentCustomElement, defineAppBarMenuButtonComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-app-bar-menu-button>` custom element. */
@Component({
  selector: 'forge-app-bar-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class AppBarMenuButtonComponent {


	public initializedCallback(...args: Parameters<AppBarMenuButtonComponentCustomElement['initializedCallback']>): ReturnType<AppBarMenuButtonComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.initializedCallback(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<AppBarMenuButtonComponentCustomElement>,
		protected zone: NgZone
	) {
		defineAppBarMenuButtonComponent();
		changeDetectorRef.detach();
	}
}
