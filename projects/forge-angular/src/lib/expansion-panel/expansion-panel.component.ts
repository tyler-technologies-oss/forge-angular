// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ExpansionPanelComponent as ExpansionPanelComponentCustomElement, defineExpansionPanelComponent } from '@tylertech/forge';

/** A web component that encapsulates the functionality of expanding/collapsing content when clicked. */
@Component({
  selector: 'forge-expansion-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ExpansionPanelComponent {

	/** The forge-expansion-panel element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Controls the open state of the panel. */
	@Input({ transform: booleanAttribute })
	public set open(value: ExpansionPanelComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): ExpansionPanelComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	/**
	 * Sets the function to call when the panel wants to open.
	 * The function must return a promise which can be resolved to
	 * open the panel or rejected which cancels the panel open.
	 */
	@Input()
	public set openCallback(value: ExpansionPanelComponentCustomElement['openCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.openCallback = value;
		});
	}
	public get openCallback(): ExpansionPanelComponentCustomElement['openCallback'] {
		return this.nativeElement.openCallback;
	}

	/**
	 * Sets the function to call when the panel wants to close.
	 * The function must return a promise which can be resolved to
	 * close the panel or rejected which cancels the panel close.
	 */
	@Input()
	public set closeCallback(value: ExpansionPanelComponentCustomElement['closeCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.closeCallback = value;
		});
	}
	public get closeCallback(): ExpansionPanelComponentCustomElement['closeCallback'] {
		return this.nativeElement.closeCallback;
	}

	/**
	 * Sets the orientation of the panel expansion.
	 * Valid values are 'vertical' (default) or 'horizontal'.
	 */
	@Input()
	public set orientation(value: ExpansionPanelComponentCustomElement['orientation']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.orientation = value;
		});
	}
	public get orientation(): ExpansionPanelComponentCustomElement['orientation'] {
		return this.nativeElement.orientation;
	}

	/** Gets/sets if animations are used in the expand/collapse transition. */
	@Input({ transform: booleanAttribute })
	public set useAnimations(value: ExpansionPanelComponentCustomElement['useAnimations']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.useAnimations = value;
		});
	}
	public get useAnimations(): ExpansionPanelComponentCustomElement['useAnimations'] {
		return this.nativeElement.useAnimations;
	}


	public initializedCallback(...args: Parameters<ExpansionPanelComponentCustomElement['initializedCallback']>): ReturnType<ExpansionPanelComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.initializedCallback(...args));
	}

	/** Toggles the collapsed state. */
	public toggle(...args: Parameters<ExpansionPanelComponentCustomElement['toggle']>): ReturnType<ExpansionPanelComponentCustomElement['toggle']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.toggle(...args));
	}

	/** Forces the expansion panel to expand/collapse without transition animations. */
	public setOpenImmediate(...args: Parameters<ExpansionPanelComponentCustomElement['setOpenImmediate']>): ReturnType<ExpansionPanelComponentCustomElement['setOpenImmediate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.setOpenImmediate(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ExpansionPanelComponentCustomElement>,
		protected zone: NgZone
	) {
		defineExpansionPanelComponent();
		changeDetectorRef.detach();
	}
}
