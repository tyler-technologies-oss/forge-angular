// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { StepperComponent as StepperComponentCustomElement, defineStepperComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StepperComponent {

	/** The forge-stepper element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The step configurations. */
	@Input()
	public set steps(value: StepperComponentCustomElement['steps']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.steps = value;
		});
	}
	public get steps(): StepperComponentCustomElement['steps'] {
		return this.nativeElement.steps;
	}

	/** The active step index. */
	@Input({ transform: numberAttribute })
	public set selectedIndex(value: StepperComponentCustomElement['selectedIndex']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectedIndex = value;
		});
	}
	public get selectedIndex(): StepperComponentCustomElement['selectedIndex'] {
		return this.nativeElement.selectedIndex;
	}

	/** Whether the stepper is linear or non-linear. */
	@Input({ transform: booleanAttribute })
	public set linear(value: StepperComponentCustomElement['linear']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.linear = value;
		});
	}
	public get linear(): StepperComponentCustomElement['linear'] {
		return this.nativeElement.linear;
	}

	/** Whether the stepper uses the default or alternative label layout mode. */
	@Input({ transform: booleanAttribute })
	public set alternative(value: StepperComponentCustomElement['alternative']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.alternative = value;
		});
	}
	public get alternative(): StepperComponentCustomElement['alternative'] {
		return this.nativeElement.alternative;
	}

	/** The layout mode of the stepper. */
	@Input()
	public set layoutMode(value: StepperComponentCustomElement['layoutMode']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.layoutMode = value;
		});
	}
	public get layoutMode(): StepperComponentCustomElement['layoutMode'] {
		return this.nativeElement.layoutMode;
	}

	/** The layout alignment of the stepper. */
	@Input()
	public set layoutAlign(value: StepperComponentCustomElement['layoutAlign']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.layoutAlign = value;
		});
	}
	public get layoutAlign(): StepperComponentCustomElement['layoutAlign'] {
		return this.nativeElement.layoutAlign;
	}


	@Input({ transform: booleanAttribute })
	public set disabled(value: StepperComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): StepperComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}


	@Input({ transform: booleanAttribute })
	public set vertical(value: StepperComponentCustomElement['vertical']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.vertical = value;
		});
	}
	public get vertical(): StepperComponentCustomElement['vertical'] {
		return this.nativeElement.vertical;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<StepperComponentCustomElement>,
		protected zone: NgZone
	) {
		defineStepperComponent();
		changeDetectorRef.detach();
	}
}
