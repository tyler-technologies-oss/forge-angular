// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { DateRangePickerComponent as DateRangePickerComponentCustomElement } from '@tylertech/forge';

/** The custom element class behind the `<forge-date-range-picker>` element. */
@Component({
  selector: 'forge-date-range-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class DateRangePickerComponent {

	/** Gets/sets the "from" date range value. */
	@Input()
	public set from(value: DateRangePickerComponentCustomElement['from']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.from = value;
		});
	}

	public get from(): DateRangePickerComponentCustomElement['from'] {
		return this.elementRef.nativeElement.from;
	}

	/** Gets/sets the "to" date range value. */
	@Input()
	public set to(value: DateRangePickerComponentCustomElement['to']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.to = value;
		});
	}

	public get to(): DateRangePickerComponentCustomElement['to'] {
		return this.elementRef.nativeElement.to;
	}

	/** Gets/sets the value of the component. */
	@Input()
	public set value(value: DateRangePickerComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): DateRangePickerComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}

	/** Gets/sets the minimum date the calendar will allow. */
	@Input()
	public set min(value: DateRangePickerComponentCustomElement['min']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.min = value;
		});
	}

	public get min(): DateRangePickerComponentCustomElement['min'] {
		return this.elementRef.nativeElement.min;
	}

	/** Gets/sets the maximum date the calendar will allow. */
	@Input()
	public set max(value: DateRangePickerComponentCustomElement['max']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.max = value;
		});
	}

	public get max(): DateRangePickerComponentCustomElement['max'] {
		return this.elementRef.nativeElement.max;
	}

	/** Gets/sets the dates that are restricted from being selected. */
	@Input()
	public set disabledDates(value: DateRangePickerComponentCustomElement['disabledDates']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabledDates = value;
		});
	}

	public get disabledDates(): DateRangePickerComponentCustomElement['disabledDates'] {
		return this.elementRef.nativeElement.disabledDates;
	}

	/** Gets/sets whether the calendar dropdown is open. */
	@Input()
	public set open(value: DateRangePickerComponentCustomElement['open'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.open = value != null && `${value}` !== 'false';
		});
	}

	public get open(): DateRangePickerComponentCustomElement['open'] {
		return this.elementRef.nativeElement.open;
	}

	/** Gets/sets the CSS classes that are applied to the popup element. */
	@Input()
	public set popupClasses(value: DateRangePickerComponentCustomElement['popupClasses']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupClasses = value;
		});
	}

	public get popupClasses(): DateRangePickerComponentCustomElement['popupClasses'] {
		return this.elementRef.nativeElement.popupClasses;
	}

	/** Gets/sets whether the date picker is disabled or not. */
	@Input()
	public set disabled(value: DateRangePickerComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): DateRangePickerComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}

	/** Gets/sets whether the input mask is applied or not. */
	@Input()
	public set masked(value: DateRangePickerComponentCustomElement['masked'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.masked = value != null && `${value}` !== 'false';
		});
	}

	public get masked(): DateRangePickerComponentCustomElement['masked'] {
		return this.elementRef.nativeElement.masked;
	}

	/** Gets/sets the mask format that displayed in the input. Default is `MM/DD/YYYY` */
	@Input()
	public set maskFormat(value: DateRangePickerComponentCustomElement['maskFormat']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.maskFormat = value;
		});
	}

	public get maskFormat(): DateRangePickerComponentCustomElement['maskFormat'] {
		return this.elementRef.nativeElement.maskFormat;
	}

	/** Gets/sets whether the mask format is displayed in the input or not. Only applies if `masked` is `true`. */
	@Input()
	public set showMaskFormat(value: DateRangePickerComponentCustomElement['showMaskFormat'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showMaskFormat = value != null && `${value}` !== 'false';
		});
	}

	public get showMaskFormat(): DateRangePickerComponentCustomElement['showMaskFormat'] {
		return this.elementRef.nativeElement.showMaskFormat;
	}

	/** Gets/sets the type for the `value` property and `forge-date-picker-change` event. */
	@Input()
	public set valueMode(value: DateRangePickerComponentCustomElement['valueMode']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.valueMode = value;
		});
	}

	public get valueMode(): DateRangePickerComponentCustomElement['valueMode'] {
		return this.elementRef.nativeElement.valueMode;
	}

	/** Gets/sets whether the native input will be notified of value changes via the `input` and `change` events. */
	@Input()
	public set notifyInputValueChanges(value: DateRangePickerComponentCustomElement['notifyInputValueChanges'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.notifyInputValueChanges = value != null && `${value}` !== 'false';
		});
	}

	public get notifyInputValueChanges(): DateRangePickerComponentCustomElement['notifyInputValueChanges'] {
		return this.elementRef.nativeElement.notifyInputValueChanges;
	}

	/** Gets/sets whether to allow an invalid date to be input. When true, the date picker will not clear out the value of the input if the date was invalid (i.e. could not be parsed). */
	@Input()
	public set allowInvalidDate(value: DateRangePickerComponentCustomElement['allowInvalidDate'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowInvalidDate = value != null && `${value}` !== 'false';
		});
	}

	public get allowInvalidDate(): DateRangePickerComponentCustomElement['allowInvalidDate'] {
		return this.elementRef.nativeElement.allowInvalidDate;
	}

	/** Gets/sets whether the today button is visible in the popup. */
	@Input()
	public set showToday(value: DateRangePickerComponentCustomElement['showToday'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showToday = value != null && `${value}` !== 'false';
		});
	}

	public get showToday(): DateRangePickerComponentCustomElement['showToday'] {
		return this.elementRef.nativeElement.showToday;
	}

	/** Gets/sets whether the clear button is visible in the popup. */
	@Input()
	public set showClear(value: DateRangePickerComponentCustomElement['showClear'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showClear = value != null && `${value}` !== 'false';
		});
	}

	public get showClear(): DateRangePickerComponentCustomElement['showClear'] {
		return this.elementRef.nativeElement.showClear;
	}

	/** Sets the callback to use for parsing a date value string to a `Date` object. */
	@Input()
	public set parseCallback(value: DateRangePickerComponentCustomElement['parseCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.parseCallback = value;
		});
	}

	public get parseCallback(): DateRangePickerComponentCustomElement['parseCallback'] {
		return this.elementRef.nativeElement.parseCallback;
	}

	/** Sets the callback to use for formatting `Date` value to a custom string format. */
	@Input()
	public set formatCallback(value: DateRangePickerComponentCustomElement['formatCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.formatCallback = value;
		});
	}

	public get formatCallback(): DateRangePickerComponentCustomElement['formatCallback'] {
		return this.elementRef.nativeElement.formatCallback;
	}

	/** Sets the callback to use when altering default mask entry. */
	@Input()
	public set prepareMaskCallback(value: DateRangePickerComponentCustomElement['prepareMaskCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.prepareMaskCallback = value;
		});
	}

	public get prepareMaskCallback(): DateRangePickerComponentCustomElement['prepareMaskCallback'] {
		return this.elementRef.nativeElement.prepareMaskCallback;
	}

	/** Sets the days of the week to disable from selection. */
	@Input()
	public set disabledDaysOfWeek(value: DateRangePickerComponentCustomElement['disabledDaysOfWeek']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabledDaysOfWeek = value;
		});
	}

	public get disabledDaysOfWeek(): DateRangePickerComponentCustomElement['disabledDaysOfWeek'] {
		return this.elementRef.nativeElement.disabledDaysOfWeek;
	}

	/** Sets the callback to use for testing whether a specific date should be disabled or not. */
	@Input()
	public set disableDayCallback(value: DateRangePickerComponentCustomElement['disableDayCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disableDayCallback = value;
		});
	}

	public get disableDayCallback(): DateRangePickerComponentCustomElement['disableDayCallback'] {
		return this.elementRef.nativeElement.disableDayCallback;
	}

	/** Sets the year range. */
	@Input()
	public set yearRange(value: DateRangePickerComponentCustomElement['yearRange']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.yearRange = value;
		});
	}

	public get yearRange(): DateRangePickerComponentCustomElement['yearRange'] {
		return this.elementRef.nativeElement.yearRange;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<DateRangePickerComponentCustomElement>,
		protected zone: NgZone
	) {
		if (!window.customElements.get('forge-date-range-picker')) {
			window.customElements.define('forge-date-range-picker', DateRangePickerComponentCustomElement);
		}
		changeDetectorRef.detach();
	}
}