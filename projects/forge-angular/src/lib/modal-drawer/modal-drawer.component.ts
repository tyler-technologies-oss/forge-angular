// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ModalDrawerComponent as ModalDrawerComponentCustomElement, defineModalDrawerComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-modal-drawer>` custom element. */
@Component({
  selector: 'forge-modal-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ModalDrawerComponent {

	/** Toggles whether a `dismissible` or `modal` drawer is open or not. Has no effect on `permanent` drawers. */
	@Input()
	public set open(value: ModalDrawerComponentCustomElement['open'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.open = value != null && `${value}` !== 'false';
		});
	}

	public get open(): ModalDrawerComponentCustomElement['open'] {
		return this.elementRef.nativeElement.open;
	}

	/** Controls the laytout direction of the drawer for positioning on the left vs. right side of the screen. */
	@Input()
	public set direction(value: ModalDrawerComponentCustomElement['direction']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.direction = value;
		});
	}

	public get direction(): ModalDrawerComponentCustomElement['direction'] {
		return this.elementRef.nativeElement.direction;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ModalDrawerComponentCustomElement>,
		protected zone: NgZone
	) {
		defineModalDrawerComponent();
		changeDetectorRef.detach();
	}
}
