// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ButtonToggleComponent as ButtonToggleComponentCustomElement, defineButtonToggleComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-button-toggle>` custom element. */
@Component({
  selector: 'forge-button-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ButtonToggleComponent {

	/** The forge-button-toggle element. */
	public readonly nativeElement = this.elementRef.nativeElement;


	@Input()
	public set value(value: ButtonToggleComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): ButtonToggleComponentCustomElement['value'] {
		return this.nativeElement.value;
	}


	@Input({ transform: booleanAttribute })
	public set selected(value: ButtonToggleComponentCustomElement['selected']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selected = value;
		});
	}
	public get selected(): ButtonToggleComponentCustomElement['selected'] {
		return this.nativeElement.selected;
	}


	@Input({ transform: booleanAttribute })
	public set disabled(value: ButtonToggleComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): ButtonToggleComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}


	@Input({ transform: booleanAttribute })
	public set dense(value: ButtonToggleComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): ButtonToggleComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}


	public initializedCallback(...args: Parameters<ButtonToggleComponentCustomElement['initializedCallback']>): ReturnType<ButtonToggleComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.initializedCallback(...args));
	}


	public focus(...args: Parameters<ButtonToggleComponentCustomElement['focus']>): ReturnType<ButtonToggleComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.focus(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ButtonToggleComponentCustomElement>,
		protected zone: NgZone
	) {
		defineButtonToggleComponent();
		changeDetectorRef.detach();
	}
}
