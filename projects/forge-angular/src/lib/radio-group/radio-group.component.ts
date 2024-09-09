// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { RadioGroupComponent as RadioGroupComponentCustomElement, defineRadioGroupComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RadioGroupComponent {

	/** The forge-radio-group element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Controls whether the radio group is disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: RadioGroupComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): RadioGroupComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<RadioGroupComponentCustomElement>,
		protected zone: NgZone
	) {
		defineRadioGroupComponent();
		changeDetectorRef.detach();
	}
}
