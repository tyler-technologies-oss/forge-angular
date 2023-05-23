// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { PopupComponent as PopupComponentCustomElement, definePopupComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-popup>` custom element. */
@Component({
  selector: 'forge-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PopupComponent {


	@Input()
	public set targetElement(value: PopupComponentCustomElement['targetElement']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.targetElement = value;
		});
	}

	public get targetElement(): PopupComponentCustomElement['targetElement'] {
		return this.elementRef.nativeElement.targetElement;
	}


	@Input()
	public set placement(value: PopupComponentCustomElement['placement']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.placement = value;
		});
	}

	public get placement(): PopupComponentCustomElement['placement'] {
		return this.elementRef.nativeElement.placement;
	}


	@Input()
	public set fallbackPlacements(value: PopupComponentCustomElement['fallbackPlacements']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.fallbackPlacements = value;
		});
	}

	public get fallbackPlacements(): PopupComponentCustomElement['fallbackPlacements'] {
		return this.elementRef.nativeElement.fallbackPlacements;
	}


	@Input()
	public set open(value: PopupComponentCustomElement['open'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.open = value != null && `${value}` !== 'false';
		});
	}

	public get open(): PopupComponentCustomElement['open'] {
		return this.elementRef.nativeElement.open;
	}


	@Input()
	public set manageFocus(value: PopupComponentCustomElement['manageFocus'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.manageFocus = value != null && `${value}` !== 'false';
		});
	}

	public get manageFocus(): PopupComponentCustomElement['manageFocus'] {
		return this.elementRef.nativeElement.manageFocus;
	}


	@Input()
	public set animationType(value: PopupComponentCustomElement['animationType']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.animationType = value;
		});
	}

	public get animationType(): PopupComponentCustomElement['animationType'] {
		return this.elementRef.nativeElement.animationType;
	}


	@Input()
	public set static(value: PopupComponentCustomElement['static'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.static = value != null && `${value}` !== 'false';
		});
	}

	public get static(): PopupComponentCustomElement['static'] {
		return this.elementRef.nativeElement.static;
	}


	@Input()
	public set hideWhenClipped(value: PopupComponentCustomElement['hideWhenClipped'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.hideWhenClipped = value != null && `${value}` !== 'false';
		});
	}

	public get hideWhenClipped(): PopupComponentCustomElement['hideWhenClipped'] {
		return this.elementRef.nativeElement.hideWhenClipped;
	}


	@Input()
	public set openCallback(value: PopupComponentCustomElement['openCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.openCallback = value;
		});
	}

	public get openCallback(): PopupComponentCustomElement['openCallback'] {
		return this.elementRef.nativeElement.openCallback;
	}


	@Input()
	public set closeCallback(value: PopupComponentCustomElement['closeCallback']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.closeCallback = value;
		});
	}

	public get closeCallback(): PopupComponentCustomElement['closeCallback'] {
		return this.elementRef.nativeElement.closeCallback;
	}


	@Input()
	public set offset(value: PopupComponentCustomElement['offset']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.offset = value;
		});
	}

	public get offset(): PopupComponentCustomElement['offset'] {
		return this.elementRef.nativeElement.offset;
	}


	public position(...args: Parameters<PopupComponentCustomElement['position']>): ReturnType<PopupComponentCustomElement['position']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.position(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<PopupComponentCustomElement>,
		protected zone: NgZone
	) {
		definePopupComponent();
		changeDetectorRef.detach();
	}
}
