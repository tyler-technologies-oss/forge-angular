// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { CalendarComponent as CalendarComponentCustomElement, defineCalendarComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-calendar>` custom element. */
@Component({
  selector: 'forge-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CalendarComponent {


	@Input()
	public set activeDate(value: CalendarComponentCustomElement['activeDate']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.activeDate = value;
		});
	}

	public get activeDate(): CalendarComponentCustomElement['activeDate'] {
		return this.elementRef.nativeElement.activeDate;
	}


	@Input()
	public set allowSingleDateRange(value: CalendarComponentCustomElement['allowSingleDateRange'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowSingleDateRange = value != null && `${value}` !== 'false';
		});
	}

	public get allowSingleDateRange(): CalendarComponentCustomElement['allowSingleDateRange'] {
		return this.elementRef.nativeElement.allowSingleDateRange;
	}


	@Input()
	public set clearButton(value: CalendarComponentCustomElement['clearButton'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.clearButton = value != null && `${value}` !== 'false';
		});
	}

	public get clearButton(): CalendarComponentCustomElement['clearButton'] {
		return this.elementRef.nativeElement.clearButton;
	}


	@Input()
	public set clearCallback(value: CalendarComponentCustomElement['clearCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.clearCallback = value;
		});
	}

	public get clearCallback(): CalendarComponentCustomElement['clearCallback'] {
		return this.elementRef.nativeElement.clearCallback;
	}


	@Input()
	public set constrainToEnabled(value: CalendarComponentCustomElement['constrainToEnabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.constrainToEnabled = value != null && `${value}` !== 'false';
		});
	}

	public get constrainToEnabled(): CalendarComponentCustomElement['constrainToEnabled'] {
		return this.elementRef.nativeElement.constrainToEnabled;
	}


	@Input()
	public set dateBuilder(value: CalendarComponentCustomElement['dateBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dateBuilder = value;
		});
	}

	public get dateBuilder(): CalendarComponentCustomElement['dateBuilder'] {
		return this.elementRef.nativeElement.dateBuilder;
	}


	@Input()
	public set dateSelectCallback(value: CalendarComponentCustomElement['dateSelectCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dateSelectCallback = value;
		});
	}

	public get dateSelectCallback(): CalendarComponentCustomElement['dateSelectCallback'] {
		return this.elementRef.nativeElement.dateSelectCallback;
	}


	@Input()
	public set dayBuilder(value: CalendarComponentCustomElement['dayBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dayBuilder = value;
		});
	}

	public get dayBuilder(): CalendarComponentCustomElement['dayBuilder'] {
		return this.elementRef.nativeElement.dayBuilder;
	}


	@Input()
	public set disabledDateBuilder(value: CalendarComponentCustomElement['disabledDateBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabledDateBuilder = value;
		});
	}

	public get disabledDateBuilder(): CalendarComponentCustomElement['disabledDateBuilder'] {
		return this.elementRef.nativeElement.disabledDateBuilder;
	}


	@Input()
	public set disabledDates(value: CalendarComponentCustomElement['disabledDates']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabledDates = value;
		});
	}

	public get disabledDates(): CalendarComponentCustomElement['disabledDates'] {
		return this.elementRef.nativeElement.disabledDates;
	}


	@Input()
	public set disabledDaysOfWeek(value: CalendarComponentCustomElement['disabledDaysOfWeek']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabledDaysOfWeek = value;
		});
	}

	public get disabledDaysOfWeek(): CalendarComponentCustomElement['disabledDaysOfWeek'] {
		return this.elementRef.nativeElement.disabledDaysOfWeek;
	}


	@Input()
	public set eventBuilder(value: CalendarComponentCustomElement['eventBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.eventBuilder = value;
		});
	}

	public get eventBuilder(): CalendarComponentCustomElement['eventBuilder'] {
		return this.elementRef.nativeElement.eventBuilder;
	}


	@Input()
	public set events(value: CalendarComponentCustomElement['events']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.events = value;
		});
	}

	public get events(): CalendarComponentCustomElement['events'] {
		return this.elementRef.nativeElement.events;
	}


	@Input()
	public set firstDayOfWeek(value: CalendarComponentCustomElement['firstDayOfWeek']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.firstDayOfWeek = value;
		});
	}

	public get firstDayOfWeek(): CalendarComponentCustomElement['firstDayOfWeek'] {
		return this.elementRef.nativeElement.firstDayOfWeek;
	}


	@Input()
	public set fixedHeight(value: CalendarComponentCustomElement['fixedHeight'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.fixedHeight = value != null && `${value}` !== 'false';
		});
	}

	public get fixedHeight(): CalendarComponentCustomElement['fixedHeight'] {
		return this.elementRef.nativeElement.fixedHeight;
	}


	@Input()
	public set listYears(value: CalendarComponentCustomElement['listYears'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.listYears = value != null && `${value}` !== 'false';
		});
	}

	public get listYears(): CalendarComponentCustomElement['listYears'] {
		return this.elementRef.nativeElement.listYears;
	}


	@Input()
	public set locale(value: CalendarComponentCustomElement['locale']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.locale = value;
		});
	}

	public get locale(): CalendarComponentCustomElement['locale'] {
		return this.elementRef.nativeElement.locale;
	}


	@Input()
	public set max(value: CalendarComponentCustomElement['max']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.max = value;
		});
	}

	public get max(): CalendarComponentCustomElement['max'] {
		return this.elementRef.nativeElement.max;
	}


	@Input()
	public set menuAnimation(value: CalendarComponentCustomElement['menuAnimation']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.menuAnimation = value;
		});
	}

	public get menuAnimation(): CalendarComponentCustomElement['menuAnimation'] {
		return this.elementRef.nativeElement.menuAnimation;
	}


	@Input()
	public set min(value: CalendarComponentCustomElement['min']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.min = value;
		});
	}

	public get min(): CalendarComponentCustomElement['min'] {
		return this.elementRef.nativeElement.min;
	}


	@Input()
	public set mode(value: CalendarComponentCustomElement['mode']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.mode = value;
		});
	}

	public get mode(): CalendarComponentCustomElement['mode'] {
		return this.elementRef.nativeElement.mode;
	}


	@Input()
	public set month(value: CalendarComponentCustomElement['month'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.month = +value;
		});
	}

	public get month(): CalendarComponentCustomElement['month'] {
		return this.elementRef.nativeElement.month;
	}


	@Input()
	public set preventFocus(value: CalendarComponentCustomElement['preventFocus'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.preventFocus = value != null && `${value}` !== 'false';
		});
	}

	public get preventFocus(): CalendarComponentCustomElement['preventFocus'] {
		return this.elementRef.nativeElement.preventFocus;
	}


	@Input()
	public set readonly(value: CalendarComponentCustomElement['readonly'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.readonly = value != null && `${value}` !== 'false';
		});
	}

	public get readonly(): CalendarComponentCustomElement['readonly'] {
		return this.elementRef.nativeElement.readonly;
	}


	@Input()
	public set selectionFollowsMonth(value: CalendarComponentCustomElement['selectionFollowsMonth'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selectionFollowsMonth = value != null && `${value}` !== 'false';
		});
	}

	public get selectionFollowsMonth(): CalendarComponentCustomElement['selectionFollowsMonth'] {
		return this.elementRef.nativeElement.selectionFollowsMonth;
	}


	@Input()
	public set showHeader(value: CalendarComponentCustomElement['showHeader'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showHeader = value != null && `${value}` !== 'false';
		});
	}

	public get showHeader(): CalendarComponentCustomElement['showHeader'] {
		return this.elementRef.nativeElement.showHeader;
	}


	@Input()
	public set showOtherMonths(value: CalendarComponentCustomElement['showOtherMonths'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showOtherMonths = value != null && `${value}` !== 'false';
		});
	}

	public get showOtherMonths(): CalendarComponentCustomElement['showOtherMonths'] {
		return this.elementRef.nativeElement.showOtherMonths;
	}


	@Input()
	public set showToday(value: CalendarComponentCustomElement['showToday'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.showToday = value != null && `${value}` !== 'false';
		});
	}

	public get showToday(): CalendarComponentCustomElement['showToday'] {
		return this.elementRef.nativeElement.showToday;
	}


	@Input()
	public set todayButton(value: CalendarComponentCustomElement['todayButton'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.todayButton = value != null && `${value}` !== 'false';
		});
	}

	public get todayButton(): CalendarComponentCustomElement['todayButton'] {
		return this.elementRef.nativeElement.todayButton;
	}


	@Input()
	public set todayCallback(value: CalendarComponentCustomElement['todayCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.todayCallback = value;
		});
	}

	public get todayCallback(): CalendarComponentCustomElement['todayCallback'] {
		return this.elementRef.nativeElement.todayCallback;
	}


	@Input()
	public set tooltipBuilder(value: CalendarComponentCustomElement['tooltipBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.tooltipBuilder = value;
		});
	}

	public get tooltipBuilder(): CalendarComponentCustomElement['tooltipBuilder'] {
		return this.elementRef.nativeElement.tooltipBuilder;
	}


	@Input()
	public set value(value: CalendarComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): CalendarComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}


	@Input()
	public set view(value: CalendarComponentCustomElement['view']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.view = value;
		});
	}

	public get view(): CalendarComponentCustomElement['view'] {
		return this.elementRef.nativeElement.view;
	}


	@Input()
	public set weekendDays(value: CalendarComponentCustomElement['weekendDays']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.weekendDays = value;
		});
	}

	public get weekendDays(): CalendarComponentCustomElement['weekendDays'] {
		return this.elementRef.nativeElement.weekendDays;
	}


	@Input()
	public set year(value: CalendarComponentCustomElement['year'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.year = +value;
		});
	}

	public get year(): CalendarComponentCustomElement['year'] {
		return this.elementRef.nativeElement.year;
	}


	@Input()
	public set yearRange(value: CalendarComponentCustomElement['yearRange']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.yearRange = value;
		});
	}

	public get yearRange(): CalendarComponentCustomElement['yearRange'] {
		return this.elementRef.nativeElement.yearRange;
	}


	public clear(...args: Parameters<CalendarComponentCustomElement['clear']>): ReturnType<CalendarComponentCustomElement['clear']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.clear(...args));
	}


	public deselectDate(...args: Parameters<CalendarComponentCustomElement['deselectDate']>): ReturnType<CalendarComponentCustomElement['deselectDate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.deselectDate(...args));
	}


	public goToDate(...args: Parameters<CalendarComponentCustomElement['goToDate']>): ReturnType<CalendarComponentCustomElement['goToDate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.goToDate(...args));
	}


	public handleKey(...args: Parameters<CalendarComponentCustomElement['handleKey']>): ReturnType<CalendarComponentCustomElement['handleKey']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.handleKey(...args));
	}


	public layout(...args: Parameters<CalendarComponentCustomElement['layout']>): ReturnType<CalendarComponentCustomElement['layout']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.layout(...args));
	}


	public selectDate(...args: Parameters<CalendarComponentCustomElement['selectDate']>): ReturnType<CalendarComponentCustomElement['selectDate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.selectDate(...args));
	}


	public setActiveDate(...args: Parameters<CalendarComponentCustomElement['setActiveDate']>): ReturnType<CalendarComponentCustomElement['setActiveDate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.setActiveDate(...args));
	}


	public today(...args: Parameters<CalendarComponentCustomElement['today']>): ReturnType<CalendarComponentCustomElement['today']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.today(...args));
	}


	public toggleDate(...args: Parameters<CalendarComponentCustomElement['toggleDate']>): ReturnType<CalendarComponentCustomElement['toggleDate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.toggleDate(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<CalendarComponentCustomElement>,
		protected zone: NgZone
	) {
		defineCalendarComponent();
		changeDetectorRef.detach();
	}
}
