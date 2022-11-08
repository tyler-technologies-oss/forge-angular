// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { BusyIndicatorComponent as BusyIndicatorComponentCustomElement, defineBusyIndicatorComponent } from '@tylertech/forge';

/** A web component that renders a busy indicator covering its parent container. */
@Component({
  selector: 'forge-busy-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BusyIndicatorComponent {

	/** The title to be displayed. */
	@Input()
	public set titleText(value: BusyIndicatorComponentCustomElement['titleText']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.titleText = value;
		});
	}

	public get titleText(): BusyIndicatorComponentCustomElement['titleText'] {
		return this.elementRef.nativeElement.titleText;
	}

	/** The message to be displayed. */
	@Input()
	public set message(value: BusyIndicatorComponentCustomElement['message']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.message = value;
		});
	}

	public get message(): BusyIndicatorComponentCustomElement['message'] {
		return this.elementRef.nativeElement.message;
	}

	/** Controls whether the cancel button is visible or not. */
	@Input()
	public set cancel(value: BusyIndicatorComponentCustomElement['cancel'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.cancel = value != null && `${value}` !== 'false';
		});
	}

	public get cancel(): BusyIndicatorComponentCustomElement['cancel'] {
		return this.elementRef.nativeElement.cancel;
	}

	/** Controls whether the progress spinner is visible or not. */
	@Input()
	public set spinner(value: BusyIndicatorComponentCustomElement['spinner'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.spinner = value != null && `${value}` !== 'false';
		});
	}

	public get spinner(): BusyIndicatorComponentCustomElement['spinner'] {
		return this.elementRef.nativeElement.spinner;
	}

	/** Controls whether the progres bar is visible or not. */
	@Input()
	public set progressBar(value: BusyIndicatorComponentCustomElement['progressBar'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.progressBar = value != null && `${value}` !== 'false';
		});
	}

	public get progressBar(): BusyIndicatorComponentCustomElement['progressBar'] {
		return this.elementRef.nativeElement.progressBar;
	}

	/** Sets the progress bar determinate state. */
	@Input()
	public set progressBarDeterminate(value: BusyIndicatorComponentCustomElement['progressBarDeterminate'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.progressBarDeterminate = value != null && `${value}` !== 'false';
		});
	}

	public get progressBarDeterminate(): BusyIndicatorComponentCustomElement['progressBarDeterminate'] {
		return this.elementRef.nativeElement.progressBarDeterminate;
	}

	/** The progress amount of the progress bar. */
	@Input()
	public set progress(value: BusyIndicatorComponentCustomElement['progress'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.progress = +value;
		});
	}

	public get progress(): BusyIndicatorComponentCustomElement['progress'] {
		return this.elementRef.nativeElement.progress;
	}

	/** The buffer amount of the progress bar. */
	@Input()
	public set buffer(value: BusyIndicatorComponentCustomElement['buffer'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.buffer = +value;
		});
	}

	public get buffer(): BusyIndicatorComponentCustomElement['buffer'] {
		return this.elementRef.nativeElement.buffer;
	}

	/** Sets the width of the busy indicator element. */
	@Input()
	public set width(value: BusyIndicatorComponentCustomElement['width']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.width = value;
		});
	}

	public get width(): BusyIndicatorComponentCustomElement['width'] {
		return this.elementRef.nativeElement.width;
	}

	/** The layout direction for alternative designs. */
	@Input()
	public set direction(value: BusyIndicatorComponentCustomElement['direction']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.direction = value;
		});
	}

	public get direction(): BusyIndicatorComponentCustomElement['direction'] {
		return this.elementRef.nativeElement.direction;
	}

	/** Controls whether the component will manage capturing and relasing focus when opened/closed. */
	@Input()
	public set manageFocus(value: BusyIndicatorComponentCustomElement['manageFocus'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.manageFocus = value != null && `${value}` !== 'false';
		});
	}

	public get manageFocus(): BusyIndicatorComponentCustomElement['manageFocus'] {
		return this.elementRef.nativeElement.manageFocus;
	}

	/**
	 * Controls the `position` of the backdrop and surface element between `fixed` and `absolute` positioning. Default is `true`.
	 * 
	 * Note: use this property when you want to render the busy indicator within a specific element where it doesn't fill the
	 *       full viewport heigth/width to only cover the parent element bounds.
	 */
	@Input()
	public set fixed(value: BusyIndicatorComponentCustomElement['fixed'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.fixed = value != null && `${value}` !== 'false';
		});
	}

	public get fixed(): BusyIndicatorComponentCustomElement['fixed'] {
		return this.elementRef.nativeElement.fixed;
	}


	public initializedCallback(...args: Parameters<BusyIndicatorComponentCustomElement['initializedCallback']>): ReturnType<BusyIndicatorComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.initializedCallback(...args));
	}

	/** Removes the element from the DOM. */
	public hide(...args: Parameters<BusyIndicatorComponentCustomElement['hide']>): ReturnType<BusyIndicatorComponentCustomElement['hide']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.hide(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<BusyIndicatorComponentCustomElement>,
		protected zone: NgZone
	) {
		defineBusyIndicatorComponent();
		changeDetectorRef.detach();
	}
}
