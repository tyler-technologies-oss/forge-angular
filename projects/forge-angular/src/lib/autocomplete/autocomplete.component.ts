// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { AutocompleteComponent as AutocompleteComponentCustomElement, defineAutocompleteComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-autocomplete>` element. */
@Component({
  selector: 'forge-autocomplete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class AutocompleteComponent {

	/** Gets/sets the interaction mode. */
	@Input()
	public set mode(value: AutocompleteComponentCustomElement['mode']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.mode = value;
		});
	}

	public get mode(): AutocompleteComponentCustomElement['mode'] {
		return this.elementRef.nativeElement.mode;
	}

	/** Gets/sets the multi-select state. */
	@Input()
	public set multiple(value: AutocompleteComponentCustomElement['multiple'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.multiple = value != null && `${value}` !== 'false';
		});
	}

	public get multiple(): AutocompleteComponentCustomElement['multiple'] {
		return this.elementRef.nativeElement.multiple;
	}

	/** Gets/sets the value. */
	@Input()
	public set value(value: AutocompleteComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): AutocompleteComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}

	/** Gets/sets the debounce delay (milliseconds) for keyboard events. */
	@Input()
	public set debounce(value: AutocompleteComponentCustomElement['debounce'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.debounce = +value;
		});
	}

	public get debounce(): AutocompleteComponentCustomElement['debounce'] {
		return this.elementRef.nativeElement.debounce;
	}

	/** Gets/sets filter on focus settings which controls whether the dropdown displays automatically when focused. */
	@Input()
	public set filterOnFocus(value: AutocompleteComponentCustomElement['filterOnFocus'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.filterOnFocus = value != null && `${value}` !== 'false';
		});
	}

	public get filterOnFocus(): AutocompleteComponentCustomElement['filterOnFocus'] {
		return this.elementRef.nativeElement.filterOnFocus;
	}

	/** Gets/sets whether the first option in the dropdown will be focused automatically when opened or not. */
	@Input()
	public set filterFocusFirst(value: AutocompleteComponentCustomElement['filterFocusFirst'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.filterFocusFirst = value != null && `${value}` !== 'false';
		});
	}

	public get filterFocusFirst(): AutocompleteComponentCustomElement['filterFocusFirst'] {
		return this.elementRef.nativeElement.filterFocusFirst;
	}

	/** Controls whether unmatched text entered by the user will stay visible an option in the dropdown is not found. */
	@Input()
	public set allowUnmatched(value: AutocompleteComponentCustomElement['allowUnmatched'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowUnmatched = value != null && `${value}` !== 'false';
		});
	}

	public get allowUnmatched(): AutocompleteComponentCustomElement['allowUnmatched'] {
		return this.elementRef.nativeElement.allowUnmatched;
	}

	/** Gets/sets the selector that will be used to find an element to attach the popup to. Defaults to the input element. */
	@Input()
	public set popupTarget(value: AutocompleteComponentCustomElement['popupTarget']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupTarget = value;
		});
	}

	public get popupTarget(): AutocompleteComponentCustomElement['popupTarget'] {
		return this.elementRef.nativeElement.popupTarget;
	}

	/**
	 * Gets/sets the filter text.
	 * 
	 * Setting the filter text only applies when allowUnmatched is enabled.
	 */
	@Input()
	public set filterText(value: AutocompleteComponentCustomElement['filterText']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.filterText = value;
		});
	}

	public get filterText(): AutocompleteComponentCustomElement['filterText'] {
		return this.elementRef.nativeElement.filterText;
	}

	/** Sets the option builder callback that will be executed when building the option list in the dropdown. */
	@Input()
	public set optionBuilder(value: AutocompleteComponentCustomElement['optionBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.optionBuilder = value;
		});
	}

	public get optionBuilder(): AutocompleteComponentCustomElement['optionBuilder'] {
		return this.elementRef.nativeElement.optionBuilder;
	}

	/** Sets the filter callback that will be executed when fetching options for the autocomplete dropdown. */
	@Input()
	public set filter(value: AutocompleteComponentCustomElement['filter']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.filter = value;
		});
	}

	public get filter(): AutocompleteComponentCustomElement['filter'] {
		return this.elementRef.nativeElement.filter;
	}

	/** Sets the selected text builder callback that will be executed when getting the selected text. */
	@Input()
	public set selectedTextBuilder(value: AutocompleteComponentCustomElement['selectedTextBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selectedTextBuilder = value;
		});
	}

	public get selectedTextBuilder(): AutocompleteComponentCustomElement['selectedTextBuilder'] {
		return this.elementRef.nativeElement.selectedTextBuilder;
	}

	/** Controls the open state of the dropdown. */
	@Input()
	public set open(value: AutocompleteComponentCustomElement['open'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.open = value != null && `${value}` !== 'false';
		});
	}

	public get open(): AutocompleteComponentCustomElement['open'] {
		return this.elementRef.nativeElement.open;
	}

	/** Gets/sets the property key to match the value to an option. */
	@Input()
	public set matchKey(value: AutocompleteComponentCustomElement['matchKey']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.matchKey = value;
		});
	}

	public get matchKey(): AutocompleteComponentCustomElement['matchKey'] {
		return this.elementRef.nativeElement.matchKey;
	}

	/** Returns whether the component has been initialized or not yet. */
	@Input()
	public set isInitialized(value: AutocompleteComponentCustomElement['isInitialized'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.isInitialized = value != null && `${value}` !== 'false';
		});
	}

	public get isInitialized(): AutocompleteComponentCustomElement['isInitialized'] {
		return this.elementRef.nativeElement.isInitialized;
	}

	/** Gets the currently active popup element when the dropdown is open. */
	@Input()
	public set popupElement(value: AutocompleteComponentCustomElement['popupElement']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupElement = value;
		});
	}

	public get popupElement(): AutocompleteComponentCustomElement['popupElement'] {
		return this.elementRef.nativeElement.popupElement;
	}

	/** Sets the callback to be executed when the user selects an option, before the UI is updated to allow for validation. */
	@Input()
	public set beforeValueChange(value: AutocompleteComponentCustomElement['beforeValueChange']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.beforeValueChange = value;
		});
	}

	public get beforeValueChange(): AutocompleteComponentCustomElement['beforeValueChange'] {
		return this.elementRef.nativeElement.beforeValueChange;
	}

	/** Gets/sets the list of classes to apply to the popup element. */
	@Input()
	public set popupClasses(value: AutocompleteComponentCustomElement['popupClasses']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupClasses = value;
		});
	}

	public get popupClasses(): AutocompleteComponentCustomElement['popupClasses'] {
		return this.elementRef.nativeElement.popupClasses;
	}

	/** Gets/sets the callback function for generating header content within the popup. */
	@Input()
	public set popupHeaderBuilder(value: AutocompleteComponentCustomElement['popupHeaderBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupHeaderBuilder = value;
		});
	}

	public get popupHeaderBuilder(): AutocompleteComponentCustomElement['popupHeaderBuilder'] {
		return this.elementRef.nativeElement.popupHeaderBuilder;
	}

	/** Gets/sets the callback function for generating header content within the popup. */
	@Input()
	public set popupFooterBuilder(value: AutocompleteComponentCustomElement['popupFooterBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.popupFooterBuilder = value;
		});
	}

	public get popupFooterBuilder(): AutocompleteComponentCustomElement['popupFooterBuilder'] {
		return this.elementRef.nativeElement.popupFooterBuilder;
	}

	/** Gets/sets whether the popup width is synchronized with the popup target width. */
	@Input()
	public set syncPopupWidth(value: AutocompleteComponentCustomElement['syncPopupWidth'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.syncPopupWidth = value != null && `${value}` !== 'false';
		});
	}

	public get syncPopupWidth(): AutocompleteComponentCustomElement['syncPopupWidth'] {
		return this.elementRef.nativeElement.syncPopupWidth;
	}

	/** Gets/sets the maximum number of options to display in the dropdown. */
	@Input()
	public set optionLimit(value: AutocompleteComponentCustomElement['optionLimit'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.optionLimit = +value;
		});
	}

	public get optionLimit(): AutocompleteComponentCustomElement['optionLimit'] {
		return this.elementRef.nativeElement.optionLimit;
	}

	/** Controls the observation of scroll events on the dropdown. */
	@Input()
	public set observeScroll(value: AutocompleteComponentCustomElement['observeScroll'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.observeScroll = value != null && `${value}` !== 'false';
		});
	}

	public get observeScroll(): AutocompleteComponentCustomElement['observeScroll'] {
		return this.elementRef.nativeElement.observeScroll;
	}

	/** The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if `observeScroll` is true. */
	@Input()
	public set observeScrollThreshold(value: AutocompleteComponentCustomElement['observeScrollThreshold'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.observeScrollThreshold = +value;
		});
	}

	public get observeScrollThreshold(): AutocompleteComponentCustomElement['observeScrollThreshold'] {
		return this.elementRef.nativeElement.observeScrollThreshold;
	}

	/** Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: `100vw`). */
	@Input()
	public set constrainPopupWidth(value: AutocompleteComponentCustomElement['constrainPopupWidth'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.constrainPopupWidth = value != null && `${value}` !== 'false';
		});
	}

	public get constrainPopupWidth(): AutocompleteComponentCustomElement['constrainPopupWidth'] {
		return this.elementRef.nativeElement.constrainPopupWidth;
	}

	/**
	 * Gets/sets whether the options will wrap their text or not.
	 * This only applies if `constrainPopupWidth` is `true`, if there is an explicit width set via CSS.
	 */
	@Input()
	public set wrapOptionText(value: AutocompleteComponentCustomElement['wrapOptionText'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.wrapOptionText = value != null && `${value}` !== 'false';
		});
	}

	public get wrapOptionText(): AutocompleteComponentCustomElement['wrapOptionText'] {
		return this.elementRef.nativeElement.wrapOptionText;
	}

	/** Adds options to the dropdown while it is open. Has no effect if the dropdown is closed. */
	public appendOptions(...args: Parameters<AutocompleteComponentCustomElement['appendOptions']>): ReturnType<AutocompleteComponentCustomElement['appendOptions']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.appendOptions(...args));
	}

	/** Opens the dropdown. */
	public openDropdown(...args: Parameters<AutocompleteComponentCustomElement['openDropdown']>): ReturnType<AutocompleteComponentCustomElement['openDropdown']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.openDropdown(...args));
	}

	/** Closes the dropdown. */
	public closeDropdown(...args: Parameters<AutocompleteComponentCustomElement['closeDropdown']>): ReturnType<AutocompleteComponentCustomElement['closeDropdown']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.closeDropdown(...args));
	}

	/** Forces the filter callback to be executed to update the current selection state with new options. */
	public forceFilter(...args: Parameters<AutocompleteComponentCustomElement['forceFilter']>): ReturnType<AutocompleteComponentCustomElement['forceFilter']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.forceFilter(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<AutocompleteComponentCustomElement>,
		protected zone: NgZone
	) {
		defineAutocompleteComponent();
		changeDetectorRef.detach();
	}
}
