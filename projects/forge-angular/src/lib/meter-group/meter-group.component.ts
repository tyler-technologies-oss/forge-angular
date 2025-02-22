// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { MeterGroupComponent as MeterGroupComponentCustomElement, defineMeterGroupComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-meter-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MeterGroupComponent {

	/** The forge-meter-group element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The minimum value of each meter in the group. */
	@Input({ transform: numberAttribute })
	public set min(value: MeterGroupComponentCustomElement['min']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.min = value;
		});
	}
	public get min(): MeterGroupComponentCustomElement['min'] {
		return this.nativeElement.min;
	}

	/** The maximum value of each meter in the group. */
	@Input({ transform: numberAttribute })
	public set max(value: MeterGroupComponentCustomElement['max']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.max = value;
		});
	}
	public get max(): MeterGroupComponentCustomElement['max'] {
		return this.nativeElement.max;
	}

	/** Whether to display tickmarks. */
	@Input({ transform: booleanAttribute })
	public set tickmarks(value: MeterGroupComponentCustomElement['tickmarks']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.tickmarks = value;
		});
	}
	public get tickmarks(): MeterGroupComponentCustomElement['tickmarks'] {
		return this.nativeElement.tickmarks;
	}

	/** Whether the meter is oriented horizontally or vertically. */
	@Input()
	public set direction(value: MeterGroupComponentCustomElement['direction']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.direction = value;
		});
	}
	public get direction(): MeterGroupComponentCustomElement['direction'] {
		return this.nativeElement.direction;
	}

	/** The density of the meter group. */
	@Input()
	public set density(value: MeterGroupComponentCustomElement['density']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.density = value;
		});
	}
	public get density(): MeterGroupComponentCustomElement['density'] {
		return this.nativeElement.density;
	}

	/** The shape of the meter group. */
	@Input()
	public set shape(value: MeterGroupComponentCustomElement['shape']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.shape = value;
		});
	}
	public get shape(): MeterGroupComponentCustomElement['shape'] {
		return this.nativeElement.shape;
	}

	/** The shape of each meter in the group. */
	@Input()
	public set innerShape(value: MeterGroupComponentCustomElement['innerShape']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.innerShape = value;
		});
	}
	public get innerShape(): MeterGroupComponentCustomElement['innerShape'] {
		return this.nativeElement.innerShape;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<MeterGroupComponentCustomElement>,
		protected zone: NgZone
	) {
		defineMeterGroupComponent();
		changeDetectorRef.detach();
	}
}
