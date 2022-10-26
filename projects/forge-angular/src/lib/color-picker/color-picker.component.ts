// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ColorPickerComponent as ColorPickerComponentCustomElement } from '@tylertech/forge';

/** The web component class behind the `<forge-color-picker>` custom element. */
@Component({
  selector: 'forge-color-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ColorPickerComponent {

	/** Gets/sets the value using hex format only. */
	@Input()
	public set value(value: ColorPickerComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): ColorPickerComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}

	/** Gets/sets the value using rgba format. */
	@Input()
	public set rgba(value: ColorPickerComponentCustomElement['rgba']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.rgba = value;
		});
	}

	public get rgba(): ColorPickerComponentCustomElement['rgba'] {
		return this.elementRef.nativeElement.rgba;
	}

	/** Gets/sets the value using hsva format. */
	@Input()
	public set hsva(value: ColorPickerComponentCustomElement['hsva']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.hsva = value;
		});
	}

	public get hsva(): ColorPickerComponentCustomElement['hsva'] {
		return this.elementRef.nativeElement.hsva;
	}

	/** Gets/sets the opacity value, if `allowOpacity` is true. */
	@Input()
	public set opacity(value: ColorPickerComponentCustomElement['opacity']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.opacity = value;
		});
	}

	public get opacity(): ColorPickerComponentCustomElement['opacity'] {
		return this.elementRef.nativeElement.opacity;
	}

	/** Gets/sets whether opacity is displayed and allowed be to changed. */
	@Input()
	public set allowOpacity(value: ColorPickerComponentCustomElement['allowOpacity'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowOpacity = value != null && `${value}` !== 'false';
		});
	}

	public get allowOpacity(): ColorPickerComponentCustomElement['allowOpacity'] {
		return this.elementRef.nativeElement.allowOpacity;
	}

	/** Gets/sets whether change event has a debounce applied to avoid successive updates. Defaults to `false`. */
	@Input()
	public set debounceChangeEvent(value: ColorPickerComponentCustomElement['debounceChangeEvent'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.debounceChangeEvent = value != null && `${value}` !== 'false';
		});
	}

	public get debounceChangeEvent(): ColorPickerComponentCustomElement['debounceChangeEvent'] {
		return this.elementRef.nativeElement.debounceChangeEvent;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ColorPickerComponentCustomElement>,
		protected zone: NgZone
	) {
		if (!window.customElements.get('forge-color-picker')) {
			window.customElements.define('forge-color-picker', ColorPickerComponentCustomElement);
		}
		changeDetectorRef.detach();
	}
}
