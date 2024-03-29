// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { PopupComponent as PopupComponentCustomElement, definePopupComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-popup>` custom element. */
@Component({
  selector: 'forge-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PopupComponent {

	/** The forge-popup element. */
	public readonly nativeElement = this.elementRef.nativeElement;


	@Input()
	public set targetElement(value: PopupComponentCustomElement['targetElement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.targetElement = value;
		});
	}
	public get targetElement(): PopupComponentCustomElement['targetElement'] {
		return this.nativeElement.targetElement;
	}


	@Input()
	public set placement(value: PopupComponentCustomElement['placement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.placement = value;
		});
	}
	public get placement(): PopupComponentCustomElement['placement'] {
		return this.nativeElement.placement;
	}


	@Input()
	public set fallbackPlacements(value: PopupComponentCustomElement['fallbackPlacements']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.fallbackPlacements = value;
		});
	}
	public get fallbackPlacements(): PopupComponentCustomElement['fallbackPlacements'] {
		return this.nativeElement.fallbackPlacements;
	}


	@Input({ transform: booleanAttribute })
	public set open(value: PopupComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): PopupComponentCustomElement['open'] {
		return this.nativeElement.open;
	}


	@Input({ transform: booleanAttribute })
	public set manageFocus(value: PopupComponentCustomElement['manageFocus']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.manageFocus = value;
		});
	}
	public get manageFocus(): PopupComponentCustomElement['manageFocus'] {
		return this.nativeElement.manageFocus;
	}


	@Input()
	public set animationType(value: PopupComponentCustomElement['animationType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.animationType = value;
		});
	}
	public get animationType(): PopupComponentCustomElement['animationType'] {
		return this.nativeElement.animationType;
	}


	@Input({ transform: booleanAttribute })
	public set static(value: PopupComponentCustomElement['static']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.static = value;
		});
	}
	public get static(): PopupComponentCustomElement['static'] {
		return this.nativeElement.static;
	}


	@Input({ transform: booleanAttribute })
	public set hideWhenClipped(value: PopupComponentCustomElement['hideWhenClipped']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.hideWhenClipped = value;
		});
	}
	public get hideWhenClipped(): PopupComponentCustomElement['hideWhenClipped'] {
		return this.nativeElement.hideWhenClipped;
	}


	@Input()
	public set openCallback(value: PopupComponentCustomElement['openCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.openCallback = value;
		});
	}
	public get openCallback(): PopupComponentCustomElement['openCallback'] {
		return this.nativeElement.openCallback;
	}


	@Input()
	public set closeCallback(value: PopupComponentCustomElement['closeCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.closeCallback = value;
		});
	}
	public get closeCallback(): PopupComponentCustomElement['closeCallback'] {
		return this.nativeElement.closeCallback;
	}


	@Input()
	public set offset(value: PopupComponentCustomElement['offset']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.offset = value;
		});
	}
	public get offset(): PopupComponentCustomElement['offset'] {
		return this.nativeElement.offset;
	}


	public position(...args: Parameters<PopupComponentCustomElement['position']>): ReturnType<PopupComponentCustomElement['position']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.position(...args));
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
