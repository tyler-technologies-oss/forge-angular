// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { DeprecatedIconButtonComponent as DeprecatedIconButtonComponentCustomElement, defineDeprecatedIconButtonComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-deprecated-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class DeprecatedIconButtonComponent {

	/** The forge-deprecated-icon-button element. */
	public readonly nativeElement = this.elementRef.nativeElement;


	@Input({ transform: booleanAttribute })
	public set disabled(value: DeprecatedIconButtonComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): DeprecatedIconButtonComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}


	@Input({ transform: booleanAttribute })
	public set toggle(value: DeprecatedIconButtonComponentCustomElement['toggle']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.toggle = value;
		});
	}
	public get toggle(): DeprecatedIconButtonComponentCustomElement['toggle'] {
		return this.nativeElement.toggle;
	}


	@Input({ transform: booleanAttribute })
	public set isOn(value: DeprecatedIconButtonComponentCustomElement['isOn']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.isOn = value;
		});
	}
	public get isOn(): DeprecatedIconButtonComponentCustomElement['isOn'] {
		return this.nativeElement.isOn;
	}


	@Input({ transform: numberAttribute })
	public set densityLevel(value: DeprecatedIconButtonComponentCustomElement['densityLevel']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.densityLevel = value;
		});
	}
	public get densityLevel(): DeprecatedIconButtonComponentCustomElement['densityLevel'] {
		return this.nativeElement.densityLevel;
	}


	public focus(...args: Parameters<DeprecatedIconButtonComponentCustomElement['focus']>): ReturnType<DeprecatedIconButtonComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.focus(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<DeprecatedIconButtonComponentCustomElement>,
		protected zone: NgZone
	) {
		defineDeprecatedIconButtonComponent();
		changeDetectorRef.detach();
	}
}