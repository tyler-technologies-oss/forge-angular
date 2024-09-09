// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { CalendarComponent as CalendarComponentCustomElement, defineCalendarComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CalendarComponent {

	/** The forge-calendar element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The currently active date in the calendar. */
	public get activeDate(): CalendarComponentCustomElement['activeDate'] {
		return this.nativeElement.activeDate;
	}

	/** Whether to allow a single date range to be selected. */
	@Input({ transform: booleanAttribute })
	public set allowSingleDateRange(value: CalendarComponentCustomElement['allowSingleDateRange']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.allowSingleDateRange = value;
		});
	}
	public get allowSingleDateRange(): CalendarComponentCustomElement['allowSingleDateRange'] {
		return this.nativeElement.allowSingleDateRange;
	}

	/** Whether to show a button to clear the selected date(s). */
	@Input({ transform: booleanAttribute })
	public set clearButton(value: CalendarComponentCustomElement['clearButton']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.clearButton = value;
		});
	}
	public get clearButton(): CalendarComponentCustomElement['clearButton'] {
		return this.nativeElement.clearButton;
	}

	/** Callback function to call when the clear button is clicked. */
	@Input()
	public set clearCallback(value: CalendarComponentCustomElement['clearCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.clearCallback = value;
		});
	}
	public get clearCallback(): CalendarComponentCustomElement['clearCallback'] {
		return this.nativeElement.clearCallback;
	}

	/** Whether to constrain the selected date(s) to the enabled dates. */
	@Input({ transform: booleanAttribute })
	public set constrainToEnabled(value: CalendarComponentCustomElement['constrainToEnabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.constrainToEnabled = value;
		});
	}
	public get constrainToEnabled(): CalendarComponentCustomElement['constrainToEnabled'] {
		return this.nativeElement.constrainToEnabled;
	}

	/** Function to build the date content. */
	@Input()
	public set dateBuilder(value: CalendarComponentCustomElement['dateBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dateBuilder = value;
		});
	}
	public get dateBuilder(): CalendarComponentCustomElement['dateBuilder'] {
		return this.nativeElement.dateBuilder;
	}

	/** Callback function to call when a date is selected. */
	@Input()
	public set dateSelectCallback(value: CalendarComponentCustomElement['dateSelectCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dateSelectCallback = value;
		});
	}
	public get dateSelectCallback(): CalendarComponentCustomElement['dateSelectCallback'] {
		return this.nativeElement.dateSelectCallback;
	}

	/** Function to build the day content. */
	@Input()
	public set dayBuilder(value: CalendarComponentCustomElement['dayBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dayBuilder = value;
		});
	}
	public get dayBuilder(): CalendarComponentCustomElement['dayBuilder'] {
		return this.nativeElement.dayBuilder;
	}

	/** Function to determine if a date is disabled. */
	@Input()
	public set disabledDateBuilder(value: CalendarComponentCustomElement['disabledDateBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabledDateBuilder = value;
		});
	}
	public get disabledDateBuilder(): CalendarComponentCustomElement['disabledDateBuilder'] {
		return this.nativeElement.disabledDateBuilder;
	}

	/** Dates that are disabled from being selected. */
	@Input()
	public set disabledDates(value: CalendarComponentCustomElement['disabledDates']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabledDates = value;
		});
	}
	public get disabledDates(): CalendarComponentCustomElement['disabledDates'] {
		return this.nativeElement.disabledDates;
	}

	/** Days of the week that are disabled from being selected. */
	@Input()
	public set disabledDaysOfWeek(value: CalendarComponentCustomElement['disabledDaysOfWeek']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabledDaysOfWeek = value;
		});
	}
	public get disabledDaysOfWeek(): CalendarComponentCustomElement['disabledDaysOfWeek'] {
		return this.nativeElement.disabledDaysOfWeek;
	}

	/** Function to build the event content. */
	@Input()
	public set eventBuilder(value: CalendarComponentCustomElement['eventBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.eventBuilder = value;
		});
	}
	public get eventBuilder(): CalendarComponentCustomElement['eventBuilder'] {
		return this.nativeElement.eventBuilder;
	}

	/** Events to display on the calendar. */
	@Input()
	public set events(value: CalendarComponentCustomElement['events']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.events = value;
		});
	}
	public get events(): CalendarComponentCustomElement['events'] {
		return this.nativeElement.events;
	}

	/** The first day of the week. */
	@Input()
	public set firstDayOfWeek(value: CalendarComponentCustomElement['firstDayOfWeek']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.firstDayOfWeek = value;
		});
	}
	public get firstDayOfWeek(): CalendarComponentCustomElement['firstDayOfWeek'] {
		return this.nativeElement.firstDayOfWeek;
	}

	/** Whether to fix the height of the calendar. */
	@Input({ transform: booleanAttribute })
	public set fixedHeight(value: CalendarComponentCustomElement['fixedHeight']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.fixedHeight = value;
		});
	}
	public get fixedHeight(): CalendarComponentCustomElement['fixedHeight'] {
		return this.nativeElement.fixedHeight;
	}

	/** Whether to list the years in the year view. */
	@Input({ transform: booleanAttribute })
	public set listYears(value: CalendarComponentCustomElement['listYears']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.listYears = value;
		});
	}
	public get listYears(): CalendarComponentCustomElement['listYears'] {
		return this.nativeElement.listYears;
	}

	/** The locale to use for formatting dates. */
	@Input()
	public set locale(value: CalendarComponentCustomElement['locale']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.locale = value;
		});
	}
	public get locale(): CalendarComponentCustomElement['locale'] {
		return this.nativeElement.locale;
	}

	/** The maximum date that can be selected. */
	@Input()
	public set max(value: CalendarComponentCustomElement['max']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.max = value;
		});
	}
	public get max(): CalendarComponentCustomElement['max'] {
		return this.nativeElement.max;
	}

	/** The animation to use for the menu. */
	@Input()
	public set menuAnimation(value: CalendarComponentCustomElement['menuAnimation']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.menuAnimation = value;
		});
	}
	public get menuAnimation(): CalendarComponentCustomElement['menuAnimation'] {
		return this.nativeElement.menuAnimation;
	}

	/** The minimum date that can be selected. */
	@Input()
	public set min(value: CalendarComponentCustomElement['min']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.min = value;
		});
	}
	public get min(): CalendarComponentCustomElement['min'] {
		return this.nativeElement.min;
	}

	/** The mode of the calendar. */
	@Input()
	public set mode(value: CalendarComponentCustomElement['mode']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.mode = value;
		});
	}
	public get mode(): CalendarComponentCustomElement['mode'] {
		return this.nativeElement.mode;
	}

	/** The month to display. */
	@Input({ transform: numberAttribute })
	public set month(value: CalendarComponentCustomElement['month']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.month = value;
		});
	}
	public get month(): CalendarComponentCustomElement['month'] {
		return this.nativeElement.month;
	}

	/** Whether to prevent the calendar from taking focus. */
	@Input({ transform: booleanAttribute })
	public set preventFocus(value: CalendarComponentCustomElement['preventFocus']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.preventFocus = value;
		});
	}
	public get preventFocus(): CalendarComponentCustomElement['preventFocus'] {
		return this.nativeElement.preventFocus;
	}

	/** Whether the calendar is readonly. */
	@Input({ transform: booleanAttribute })
	public set readonly(value: CalendarComponentCustomElement['readonly']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.readonly = value;
		});
	}
	public get readonly(): CalendarComponentCustomElement['readonly'] {
		return this.nativeElement.readonly;
	}

	/** Whether the selection follows the month. */
	@Input({ transform: booleanAttribute })
	public set selectionFollowsMonth(value: CalendarComponentCustomElement['selectionFollowsMonth']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectionFollowsMonth = value;
		});
	}
	public get selectionFollowsMonth(): CalendarComponentCustomElement['selectionFollowsMonth'] {
		return this.nativeElement.selectionFollowsMonth;
	}

	/** Whether to show the header. */
	@Input({ transform: booleanAttribute })
	public set showHeader(value: CalendarComponentCustomElement['showHeader']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.showHeader = value;
		});
	}
	public get showHeader(): CalendarComponentCustomElement['showHeader'] {
		return this.nativeElement.showHeader;
	}

	/** Whether to show days from other months. */
	@Input({ transform: booleanAttribute })
	public set showOtherMonths(value: CalendarComponentCustomElement['showOtherMonths']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.showOtherMonths = value;
		});
	}
	public get showOtherMonths(): CalendarComponentCustomElement['showOtherMonths'] {
		return this.nativeElement.showOtherMonths;
	}

	/** Whether to show the today button. */
	@Input({ transform: booleanAttribute })
	public set showToday(value: CalendarComponentCustomElement['showToday']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.showToday = value;
		});
	}
	public get showToday(): CalendarComponentCustomElement['showToday'] {
		return this.nativeElement.showToday;
	}

	/** Whether to show a button to select today. */
	@Input({ transform: booleanAttribute })
	public set todayButton(value: CalendarComponentCustomElement['todayButton']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.todayButton = value;
		});
	}
	public get todayButton(): CalendarComponentCustomElement['todayButton'] {
		return this.nativeElement.todayButton;
	}

	/** Callback function to call when the today button is clicked. */
	@Input()
	public set todayCallback(value: CalendarComponentCustomElement['todayCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.todayCallback = value;
		});
	}
	public get todayCallback(): CalendarComponentCustomElement['todayCallback'] {
		return this.nativeElement.todayCallback;
	}

	/** Function to build the tooltip content. */
	@Input()
	public set tooltipBuilder(value: CalendarComponentCustomElement['tooltipBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.tooltipBuilder = value;
		});
	}
	public get tooltipBuilder(): CalendarComponentCustomElement['tooltipBuilder'] {
		return this.nativeElement.tooltipBuilder;
	}

	/** The selected date(s). */
	@Input()
	public set value(value: CalendarComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): CalendarComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** The view of the calendar. */
	@Input()
	public set view(value: CalendarComponentCustomElement['view']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.view = value;
		});
	}
	public get view(): CalendarComponentCustomElement['view'] {
		return this.nativeElement.view;
	}

	/** The days of the week that are considered weekends. */
	@Input()
	public set weekendDays(value: CalendarComponentCustomElement['weekendDays']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.weekendDays = value;
		});
	}
	public get weekendDays(): CalendarComponentCustomElement['weekendDays'] {
		return this.nativeElement.weekendDays;
	}

	/** The year to display. */
	@Input({ transform: numberAttribute })
	public set year(value: CalendarComponentCustomElement['year']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.year = value;
		});
	}
	public get year(): CalendarComponentCustomElement['year'] {
		return this.nativeElement.year;
	}

	/** The range of years to display. */
	@Input()
	public set yearRange(value: CalendarComponentCustomElement['yearRange']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.yearRange = value;
		});
	}
	public get yearRange(): CalendarComponentCustomElement['yearRange'] {
		return this.nativeElement.yearRange;
	}

	/** Clears the selected date(s). */
	public clear(...args: Parameters<CalendarComponentCustomElement['clear']>): ReturnType<CalendarComponentCustomElement['clear']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.clear(...args));
	}

	/** Deselects a date. */
	public deselectDate(...args: Parameters<CalendarComponentCustomElement['deselectDate']>): ReturnType<CalendarComponentCustomElement['deselectDate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.deselectDate(...args));
	}

	/** Navigates to a specific date. */
	public goToDate(...args: Parameters<CalendarComponentCustomElement['goToDate']>): ReturnType<CalendarComponentCustomElement['goToDate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.goToDate(...args));
	}

	/** Handles a keyboard event. */
	public handleKey(...args: Parameters<CalendarComponentCustomElement['handleKey']>): ReturnType<CalendarComponentCustomElement['handleKey']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.handleKey(...args));
	}

	/** Lays out the calendar. */
	public layout(...args: Parameters<CalendarComponentCustomElement['layout']>): ReturnType<CalendarComponentCustomElement['layout']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.layout(...args));
	}

	/** Selects a date. */
	public selectDate(...args: Parameters<CalendarComponentCustomElement['selectDate']>): ReturnType<CalendarComponentCustomElement['selectDate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.selectDate(...args));
	}

	/** Sets the active date. */
	public setActiveDate(...args: Parameters<CalendarComponentCustomElement['setActiveDate']>): ReturnType<CalendarComponentCustomElement['setActiveDate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.setActiveDate(...args));
	}

	/** Sets the calendar to today. */
	public today(...args: Parameters<CalendarComponentCustomElement['today']>): ReturnType<CalendarComponentCustomElement['today']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.today(...args));
	}

	/** Toggles a date selection. */
	public toggleDate(...args: Parameters<CalendarComponentCustomElement['toggleDate']>): ReturnType<CalendarComponentCustomElement['toggleDate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.toggleDate(...args));
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
