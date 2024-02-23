// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { MiniDrawerComponent as MiniDrawerComponentCustomElement, defineMiniDrawerComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-mini-drawer>` custom element. */
@Component({
  selector: 'forge-mini-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MiniDrawerComponent {

	/** The forge-mini-drawer element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Toggles whether a `dismissible` or `modal` drawer is open or not. Has no effect on `permanent` drawers. */
	@Input({ transform: booleanAttribute })
	public set open(value: MiniDrawerComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): MiniDrawerComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	/** Controls the laytout direction of the drawer for positioning on the left vs. right side of the screen. */
	@Input()
	public set direction(value: MiniDrawerComponentCustomElement['direction']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.direction = value;
		});
	}
	public get direction(): MiniDrawerComponentCustomElement['direction'] {
		return this.nativeElement.direction;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<MiniDrawerComponentCustomElement>,
		protected zone: NgZone
	) {
		defineMiniDrawerComponent();
		changeDetectorRef.detach();
	}
}
