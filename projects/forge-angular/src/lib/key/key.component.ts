// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { KeyComponent as KeyComponentCustomElement, defineKeyComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-key',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class KeyComponent {

	/** The forge-key element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<KeyComponentCustomElement>,
		protected zone: NgZone
	) {
		defineKeyComponent();
		changeDetectorRef.detach();
	}
}
