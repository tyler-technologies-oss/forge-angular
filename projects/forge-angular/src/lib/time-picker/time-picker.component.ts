// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { TimePickerComponent as TimePickerComponentCustomElement } from '@tylertech/forge';

/** The web component class behind the `<forge-time-picker>` custom element. */
@Component({
  selector: 'forge-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TimePickerComponent {


	@Input()
	public set value(value: TimePickerComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): TimePickerComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}


	@Input()
	public set open(value: TimePickerComponentCustomElement['open'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.open = value != null && `${value}` !== 'false';
		});
	}

	public get open(): TimePickerComponentCustomElement['open'] {
		return this.elementRef.nativeElement.open;
	}


	@Input()
	public set allowSeconds(value: TimePickerComponentCustomElement['allowSeconds'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowSeconds = value != null && `${value}` !== 'false';
		});
	}

	public get allowSeconds(): TimePickerComponentCustomElement['allowSeconds'] {
		return this.elementRef.nativeElement.allowSeconds;
	}


	@Input()
	public set masked(value: TimePickerComponentCustomElement['masked'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.masked = value != null && `${value}` !== 'false';
		});
	}

	public get masked(): TimePickerComponentCustomElement['masked'] {
		return this.elementRef.nativeElement.masked;
	}


	@Input()
	public set showMaskFormat(value: TimePickerComponentCustomElement['showMaskFormat'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showMaskFormat = value != null && `${value}` !== 'false';
		});
	}

	public get showMaskFormat(): TimePickerComponentCustomElement['showMaskFormat'] {
		return this.elementRef.nativeElement.showMaskFormat;
	}


	@Input()
	public set use24HourTime(value: TimePickerComponentCustomElement['use24HourTime'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.use24HourTime = value != null && `${value}` !== 'false';
		});
	}

	public get use24HourTime(): TimePickerComponentCustomElement['use24HourTime'] {
		return this.elementRef.nativeElement.use24HourTime;
	}


	@Input()
	public set allowInvalidTime(value: TimePickerComponentCustomElement['allowInvalidTime'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowInvalidTime = value != null && `${value}` !== 'false';
		});
	}

	public get allowInvalidTime(): TimePickerComponentCustomElement['allowInvalidTime'] {
		return this.elementRef.nativeElement.allowInvalidTime;
	}


	@Input()
	public set min(value: TimePickerComponentCustomElement['min']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.min = value;
		});
	}

	public get min(): TimePickerComponentCustomElement['min'] {
		return this.elementRef.nativeElement.min;
	}


	@Input()
	public set max(value: TimePickerComponentCustomElement['max']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.max = value;
		});
	}

	public get max(): TimePickerComponentCustomElement['max'] {
		return this.elementRef.nativeElement.max;
	}


	@Input()
	public set restrictedTimes(value: TimePickerComponentCustomElement['restrictedTimes']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.restrictedTimes = value;
		});
	}

	public get restrictedTimes(): TimePickerComponentCustomElement['restrictedTimes'] {
		return this.elementRef.nativeElement.restrictedTimes;
	}


	@Input()
	public set startTime(value: TimePickerComponentCustomElement['startTime']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.startTime = value;
		});
	}

	public get startTime(): TimePickerComponentCustomElement['startTime'] {
		return this.elementRef.nativeElement.startTime;
	}


	@Input()
	public set step(value: TimePickerComponentCustomElement['step'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.step = +value;
		});
	}

	public get step(): TimePickerComponentCustomElement['step'] {
		return this.elementRef.nativeElement.step;
	}


	@Input()
	public set allowInput(value: TimePickerComponentCustomElement['allowInput'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowInput = value != null && `${value}` !== 'false';
		});
	}

	public get allowInput(): TimePickerComponentCustomElement['allowInput'] {
		return this.elementRef.nativeElement.allowInput;
	}


	@Input()
	public set showNow(value: TimePickerComponentCustomElement['showNow'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showNow = value != null && `${value}` !== 'false';
		});
	}

	public get showNow(): TimePickerComponentCustomElement['showNow'] {
		return this.elementRef.nativeElement.showNow;
	}

	/** Whether or not to display hour options in dropdown */
	@Input()
	public set showHourOptions(value: TimePickerComponentCustomElement['showHourOptions'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showHourOptions = value != null && `${value}` !== 'false';
		});
	}

	public get showHourOptions(): TimePickerComponentCustomElement['showHourOptions'] {
		return this.elementRef.nativeElement.showHourOptions;
	}


	@Input()
	public set customOptions(value: TimePickerComponentCustomElement['customOptions']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.customOptions = value;
		});
	}

	public get customOptions(): TimePickerComponentCustomElement['customOptions'] {
		return this.elementRef.nativeElement.customOptions;
	}


	@Input()
	public set validationCallback(value: TimePickerComponentCustomElement['validationCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.validationCallback = value;
		});
	}

	public get validationCallback(): TimePickerComponentCustomElement['validationCallback'] {
		return this.elementRef.nativeElement.validationCallback;
	}


	@Input()
	public set parseCallback(value: TimePickerComponentCustomElement['parseCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.parseCallback = value;
		});
	}

	public get parseCallback(): TimePickerComponentCustomElement['parseCallback'] {
		return this.elementRef.nativeElement.parseCallback;
	}


	@Input()
	public set formatCallback(value: TimePickerComponentCustomElement['formatCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.formatCallback = value;
		});
	}

	public get formatCallback(): TimePickerComponentCustomElement['formatCallback'] {
		return this.elementRef.nativeElement.formatCallback;
	}


	@Input()
	public set coercionCallback(value: TimePickerComponentCustomElement['coercionCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.coercionCallback = value;
		});
	}

	public get coercionCallback(): TimePickerComponentCustomElement['coercionCallback'] {
		return this.elementRef.nativeElement.coercionCallback;
	}


	@Input()
	public set prepareMaskCallback(value: TimePickerComponentCustomElement['prepareMaskCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.prepareMaskCallback = value;
		});
	}

	public get prepareMaskCallback(): TimePickerComponentCustomElement['prepareMaskCallback'] {
		return this.elementRef.nativeElement.prepareMaskCallback;
	}


	@Input()
	public set disabled(value: TimePickerComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): TimePickerComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}


	@Input()
	public set popupClasses(value: TimePickerComponentCustomElement['popupClasses']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupClasses = value;
		});
	}

	public get popupClasses(): TimePickerComponentCustomElement['popupClasses'] {
		return this.elementRef.nativeElement.popupClasses;
	}


	@Input()
	public set allowDropdown(value: TimePickerComponentCustomElement['allowDropdown'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowDropdown = value != null && `${value}` !== 'false';
		});
	}

	public get allowDropdown(): TimePickerComponentCustomElement['allowDropdown'] {
		return this.elementRef.nativeElement.allowDropdown;
	}


	@Input()
	public set popupTarget(value: TimePickerComponentCustomElement['popupTarget']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupTarget = value;
		});
	}

	public get popupTarget(): TimePickerComponentCustomElement['popupTarget'] {
		return this.elementRef.nativeElement.popupTarget;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<TimePickerComponentCustomElement>,
		protected zone: NgZone
	) {
		if (!window.customElements.get('forge-time-picker')) {
			window.customElements.define('forge-time-picker', TimePickerComponentCustomElement);
		}
		changeDetectorRef.detach();
	}
}
