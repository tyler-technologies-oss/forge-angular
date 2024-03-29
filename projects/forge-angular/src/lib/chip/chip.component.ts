// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ChipComponent as ChipComponentCustomElement, defineChipComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-chip>` component. */
@Component({
  selector: 'forge-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ChipComponent {

	/** The forge-chip element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Gets/sets the chip type. */
	@Input()
	public set type(value: ChipComponentCustomElement['type']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.type = value;
		});
	}
	public get type(): ChipComponentCustomElement['type'] {
		return this.nativeElement.type;
	}

	/** Gets/sets the selected state of the chip. */
	@Input({ transform: booleanAttribute })
	public set selected(value: ChipComponentCustomElement['selected']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selected = value;
		});
	}
	public get selected(): ChipComponentCustomElement['selected'] {
		return this.nativeElement.selected;
	}

	/** Gets/sets the disabled state of the chip. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: ChipComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): ChipComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Gets/sets the invalid state of the chip. */
	@Input({ transform: booleanAttribute })
	public set invalid(value: ChipComponentCustomElement['invalid']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.invalid = value;
		});
	}
	public get invalid(): ChipComponentCustomElement['invalid'] {
		return this.nativeElement.invalid;
	}

	/** Gets/sets the chip value. */
	@Input()
	public set value(value: ChipComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): ChipComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Gets/sets the dense state of the chip. */
	@Input({ transform: booleanAttribute })
	public set dense(value: ChipComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): ChipComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}


	@Input({ transform: booleanAttribute })
	public set emulateFocus(value: ChipComponentCustomElement['emulateFocus']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.emulateFocus = value;
		});
	}
	public get emulateFocus(): ChipComponentCustomElement['emulateFocus'] {
		return this.nativeElement.emulateFocus;
	}


	public focus(...args: Parameters<ChipComponentCustomElement['focus']>): ReturnType<ChipComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.focus(...args));
	}


	public tryFocusDelete(...args: Parameters<ChipComponentCustomElement['tryFocusDelete']>): ReturnType<ChipComponentCustomElement['tryFocusDelete']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.tryFocusDelete(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ChipComponentCustomElement>,
		protected zone: NgZone
	) {
		defineChipComponent();
		changeDetectorRef.detach();
	}
}
