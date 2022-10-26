// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ButtonToggleComponent as ButtonToggleComponentCustomElement } from '@tylertech/forge';

/** The web component class behind the `<forge-button-toggle>` custom element. */
@Component({
  selector: 'forge-button-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ButtonToggleComponent {


	@Input()
	public set value(value: ButtonToggleComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): ButtonToggleComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}


	@Input()
	public set selected(value: ButtonToggleComponentCustomElement['selected'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selected = value != null && `${value}` !== 'false';
		});
	}

	public get selected(): ButtonToggleComponentCustomElement['selected'] {
		return this.elementRef.nativeElement.selected;
	}


	@Input()
	public set disabled(value: ButtonToggleComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): ButtonToggleComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}


	@Input()
	public set dense(value: ButtonToggleComponentCustomElement['dense'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dense = value != null && `${value}` !== 'false';
		});
	}

	public get dense(): ButtonToggleComponentCustomElement['dense'] {
		return this.elementRef.nativeElement.dense;
	}


	public initializedCallback(...args: Parameters<ButtonToggleComponentCustomElement['initializedCallback']>): ReturnType<ButtonToggleComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.initializedCallback(...args));
	}


	public focus(...args: Parameters<ButtonToggleComponentCustomElement['focus']>): ReturnType<ButtonToggleComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.focus(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ButtonToggleComponentCustomElement>,
		protected zone: NgZone
	) {
		if (!window.customElements.get('forge-button-toggle')) {
			window.customElements.define('forge-button-toggle', ButtonToggleComponentCustomElement);
		}
		changeDetectorRef.detach();
	}
}
