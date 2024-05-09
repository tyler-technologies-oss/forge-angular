// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ChipFieldComponent as ChipFieldComponentCustomElement, defineChipFieldComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-chip-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ChipFieldComponent {

	/** The forge-chip-field element. */
	public readonly nativeElement = this.elementRef.nativeElement;


	@Input({ transform: booleanAttribute })
	public set addOnBlur(value: ChipFieldComponentCustomElement['addOnBlur']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.addOnBlur = value;
		});
	}
	public get addOnBlur(): ChipFieldComponentCustomElement['addOnBlur'] {
		return this.nativeElement.addOnBlur;
	}


	public get popoverTargetElement(): ChipFieldComponentCustomElement['popoverTargetElement'] {
		return this.nativeElement.popoverTargetElement;
	}


	@Input()
	public set labelPosition(value: ChipFieldComponentCustomElement['labelPosition']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.labelPosition = value;
		});
	}
	public get labelPosition(): ChipFieldComponentCustomElement['labelPosition'] {
		return this.nativeElement.labelPosition;
	}


	@Input()
	public set labelAlignment(value: ChipFieldComponentCustomElement['labelAlignment']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.labelAlignment = value;
		});
	}
	public get labelAlignment(): ChipFieldComponentCustomElement['labelAlignment'] {
		return this.nativeElement.labelAlignment;
	}


	@Input({ transform: booleanAttribute })
	public set invalid(value: ChipFieldComponentCustomElement['invalid']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.invalid = value;
		});
	}
	public get invalid(): ChipFieldComponentCustomElement['invalid'] {
		return this.nativeElement.invalid;
	}


	@Input({ transform: booleanAttribute })
	public set required(value: ChipFieldComponentCustomElement['required']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.required = value;
		});
	}
	public get required(): ChipFieldComponentCustomElement['required'] {
		return this.nativeElement.required;
	}


	@Input({ transform: booleanAttribute })
	public set optional(value: ChipFieldComponentCustomElement['optional']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.optional = value;
		});
	}
	public get optional(): ChipFieldComponentCustomElement['optional'] {
		return this.nativeElement.optional;
	}


	@Input({ transform: booleanAttribute })
	public set disabled(value: ChipFieldComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): ChipFieldComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}


	@Input({ transform: booleanAttribute })
	public set floatLabel(value: ChipFieldComponentCustomElement['floatLabel']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.floatLabel = value;
		});
	}
	public get floatLabel(): ChipFieldComponentCustomElement['floatLabel'] {
		return this.nativeElement.floatLabel;
	}


	@Input()
	public set variant(value: ChipFieldComponentCustomElement['variant']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.variant = value;
		});
	}
	public get variant(): ChipFieldComponentCustomElement['variant'] {
		return this.nativeElement.variant;
	}


	@Input()
	public set theme(value: ChipFieldComponentCustomElement['theme']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.theme = value;
		});
	}
	public get theme(): ChipFieldComponentCustomElement['theme'] {
		return this.nativeElement.theme;
	}


	@Input()
	public set shape(value: ChipFieldComponentCustomElement['shape']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.shape = value;
		});
	}
	public get shape(): ChipFieldComponentCustomElement['shape'] {
		return this.nativeElement.shape;
	}


	@Input()
	public set density(value: ChipFieldComponentCustomElement['density']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.density = value;
		});
	}
	public get density(): ChipFieldComponentCustomElement['density'] {
		return this.nativeElement.density;
	}


	@Input({ transform: booleanAttribute })
	public set dense(value: ChipFieldComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): ChipFieldComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}


	@Input({ transform: booleanAttribute })
	public set popoverIcon(value: ChipFieldComponentCustomElement['popoverIcon']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.popoverIcon = value;
		});
	}
	public get popoverIcon(): ChipFieldComponentCustomElement['popoverIcon'] {
		return this.nativeElement.popoverIcon;
	}


	@Input()
	public set supportTextInset(value: ChipFieldComponentCustomElement['supportTextInset']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.supportTextInset = value;
		});
	}
	public get supportTextInset(): ChipFieldComponentCustomElement['supportTextInset'] {
		return this.nativeElement.supportTextInset;
	}


	public click(...args: Parameters<ChipFieldComponentCustomElement['click']>): ReturnType<ChipFieldComponentCustomElement['click']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.click(...args));
	}


	public floatLabelWithoutAnimation(...args: Parameters<ChipFieldComponentCustomElement['floatLabelWithoutAnimation']>): ReturnType<ChipFieldComponentCustomElement['floatLabelWithoutAnimation']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.floatLabelWithoutAnimation(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ChipFieldComponentCustomElement>,
		protected zone: NgZone
	) {
		defineChipFieldComponent();
		changeDetectorRef.detach();
	}
}
