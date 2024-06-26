// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { SelectDropdownComponent as SelectDropdownComponentCustomElement, defineSelectDropdownComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-select-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SelectDropdownComponent {

	/** The forge-select-dropdown element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Sets the target element CSS selector */
	@Input()
	public set target(value: SelectDropdownComponentCustomElement['target']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.target = value;
		});
	}
	public get target(): SelectDropdownComponentCustomElement['target'] {
		return this.nativeElement.target;
	}

	/** Sets the selected text element CSS selector */
	@Input()
	public set selectedTextTarget(value: SelectDropdownComponentCustomElement['selectedTextTarget']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectedTextTarget = value;
		});
	}
	public get selectedTextTarget(): SelectDropdownComponentCustomElement['selectedTextTarget'] {
		return this.nativeElement.selectedTextTarget;
	}

	/** Controls whether the selected text is synchronized to the target elements' text content. Default is false. */
	@Input({ transform: booleanAttribute })
	public set syncSelectedText(value: SelectDropdownComponentCustomElement['syncSelectedText']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.syncSelectedText = value;
		});
	}
	public get syncSelectedText(): SelectDropdownComponentCustomElement['syncSelectedText'] {
		return this.nativeElement.syncSelectedText;
	}

	/** Gets/sets the value. */
	@Input()
	public set value(value: SelectDropdownComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): SelectDropdownComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Gets/sets the selected index. */
	@Input()
	public set selectedIndex(value: SelectDropdownComponentCustomElement['selectedIndex']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectedIndex = value;
		});
	}
	public get selectedIndex(): SelectDropdownComponentCustomElement['selectedIndex'] {
		return this.nativeElement.selectedIndex;
	}

	/** Gets/sets the available options. */
	@Input()
	public set options(value: SelectDropdownComponentCustomElement['options']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.options = value;
		});
	}
	public get options(): SelectDropdownComponentCustomElement['options'] {
		return this.nativeElement.options;
	}

	/** Gets/sets the multiple select state. */
	@Input({ transform: booleanAttribute })
	public set multiple(value: SelectDropdownComponentCustomElement['multiple']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.multiple = value;
		});
	}
	public get multiple(): SelectDropdownComponentCustomElement['multiple'] {
		return this.nativeElement.multiple;
	}

	/** Gets the open state of the dropdown. */
	@Input({ transform: booleanAttribute })
	public set open(value: SelectDropdownComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): SelectDropdownComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	/** Sets the option builder callback that will be executed when building the option list in the dropdown. */
	@Input()
	public set optionBuilder(value: SelectDropdownComponentCustomElement['optionBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.optionBuilder = value;
		});
	}
	public get optionBuilder(): SelectDropdownComponentCustomElement['optionBuilder'] {
		return this.nativeElement.optionBuilder;
	}

	/** Sets the selected text builder callback that will be executed when getting the selected text to display in the field. */
	@Input()
	public set selectedTextBuilder(value: SelectDropdownComponentCustomElement['selectedTextBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectedTextBuilder = value;
		});
	}
	public get selectedTextBuilder(): SelectDropdownComponentCustomElement['selectedTextBuilder'] {
		return this.nativeElement.selectedTextBuilder;
	}

	/** Sets the callback to be executed when the user selects a value. */
	@Input()
	public set beforeValueChange(value: SelectDropdownComponentCustomElement['beforeValueChange']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.beforeValueChange = value;
		});
	}
	public get beforeValueChange(): SelectDropdownComponentCustomElement['beforeValueChange'] {
		return this.nativeElement.beforeValueChange;
	}

	/** Gets the popup element (when the dropdown is open). */
	public get popupElement(): SelectDropdownComponentCustomElement['popupElement'] {
		return this.nativeElement.popupElement;
	}

	/** Gets/sets the list of classes to apply to the popup element. */
	@Input()
	public set popupClasses(value: SelectDropdownComponentCustomElement['popupClasses']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.popupClasses = value;
		});
	}
	public get popupClasses(): SelectDropdownComponentCustomElement['popupClasses'] {
		return this.nativeElement.popupClasses;
	}

	/** Gets/sets the callback function for generating header content within the popup. */
	@Input()
	public set popupHeaderBuilder(value: SelectDropdownComponentCustomElement['popupHeaderBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.popupHeaderBuilder = value;
		});
	}
	public get popupHeaderBuilder(): SelectDropdownComponentCustomElement['popupHeaderBuilder'] {
		return this.nativeElement.popupHeaderBuilder;
	}

	/** Gets/sets the callback function for generating header content within the popup. */
	@Input()
	public set popupFooterBuilder(value: SelectDropdownComponentCustomElement['popupFooterBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.popupFooterBuilder = value;
		});
	}
	public get popupFooterBuilder(): SelectDropdownComponentCustomElement['popupFooterBuilder'] {
		return this.nativeElement.popupFooterBuilder;
	}

	/** Gets/sets whether the popup width is synchronized with the popup target width. */
	@Input({ transform: booleanAttribute })
	public set syncPopupWidth(value: SelectDropdownComponentCustomElement['syncPopupWidth']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.syncPopupWidth = value;
		});
	}
	public get syncPopupWidth(): SelectDropdownComponentCustomElement['syncPopupWidth'] {
		return this.nativeElement.syncPopupWidth;
	}

	/** Gets/sets the maximum number of options to display in the dropdown. */
	@Input({ transform: numberAttribute })
	public set optionLimit(value: SelectDropdownComponentCustomElement['optionLimit']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.optionLimit = value;
		});
	}
	public get optionLimit(): SelectDropdownComponentCustomElement['optionLimit'] {
		return this.nativeElement.optionLimit;
	}

	/** Controls the observation of scroll events on the dropdown. */
	@Input({ transform: booleanAttribute })
	public set observeScroll(value: SelectDropdownComponentCustomElement['observeScroll']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.observeScroll = value;
		});
	}
	public get observeScroll(): SelectDropdownComponentCustomElement['observeScroll'] {
		return this.nativeElement.observeScroll;
	}

	/** The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if `observeScroll` is true. */
	@Input({ transform: numberAttribute })
	public set observeScrollThreshold(value: SelectDropdownComponentCustomElement['observeScrollThreshold']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.observeScrollThreshold = value;
		});
	}
	public get observeScrollThreshold(): SelectDropdownComponentCustomElement['observeScrollThreshold'] {
		return this.nativeElement.observeScrollThreshold;
	}

	/** Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: `100vw`). */
	@Input({ transform: booleanAttribute })
	public set constrainPopupWidth(value: SelectDropdownComponentCustomElement['constrainPopupWidth']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.constrainPopupWidth = value;
		});
	}
	public get constrainPopupWidth(): SelectDropdownComponentCustomElement['constrainPopupWidth'] {
		return this.nativeElement.constrainPopupWidth;
	}

	/**
	 * Gets/sets whether the options will wrap their text or not.
	 * This only applies if `constrainPopupWidth` is `true`, if there is an explicit width set via CSS.
	 */
	@Input({ transform: booleanAttribute })
	public set wrapOptionText(value: SelectDropdownComponentCustomElement['wrapOptionText']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.wrapOptionText = value;
		});
	}
	public get wrapOptionText(): SelectDropdownComponentCustomElement['wrapOptionText'] {
		return this.nativeElement.wrapOptionText;
	}

	/** Dynamically appends options to the dropdown while it's open. */
	public appendOptions(...args: Parameters<SelectDropdownComponentCustomElement['appendOptions']>): ReturnType<SelectDropdownComponentCustomElement['appendOptions']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.appendOptions(...args));
	}

	/** Selects all options. */
	public selectAll(...args: Parameters<SelectDropdownComponentCustomElement['selectAll']>): ReturnType<SelectDropdownComponentCustomElement['selectAll']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.selectAll(...args));
	}

	/** Deselects all options. */
	public deselectAll(...args: Parameters<SelectDropdownComponentCustomElement['deselectAll']>): ReturnType<SelectDropdownComponentCustomElement['deselectAll']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.deselectAll(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<SelectDropdownComponentCustomElement>,
		protected zone: NgZone
	) {
		defineSelectDropdownComponent();
		changeDetectorRef.detach();
	}
}
