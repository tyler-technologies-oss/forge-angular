// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { PopoverComponent as PopoverComponentCustomElement, definePopoverComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PopoverComponent {

	/** The forge-popover element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Whether or not the popover should render an arrow. */
	@Input({ transform: booleanAttribute })
	public set arrow(value: PopoverComponentCustomElement['arrow']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.arrow = value;
		});
	}
	public get arrow(): PopoverComponentCustomElement['arrow'] {
		return this.nativeElement.arrow;
	}

	/** The animation type to use for the popover. Valid values are `'none'`, `'fade'`, `'slide'`, and `'zoom'` (default). */
	@Input()
	public set animationType(value: PopoverComponentCustomElement['animationType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.animationType = value;
		});
	}
	public get animationType(): PopoverComponentCustomElement['animationType'] {
		return this.nativeElement.animationType;
	}

	/** The trigger type(s) to use for the popover. Valid values are `'click'` (default), `'hover'`, `'focus'`, and `'longpress'`. Multiple can be specified. */
	@Input()
	public set triggerType(value: PopoverComponentCustomElement['triggerType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.triggerType = value;
		});
	}
	public get triggerType(): PopoverComponentCustomElement['triggerType'] {
		return this.nativeElement.triggerType;
	}

	/** The delay in milliseconds before a longpress event is detected. */
	@Input({ transform: numberAttribute })
	public set longpressDelay(value: PopoverComponentCustomElement['longpressDelay']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.longpressDelay = value;
		});
	}
	public get longpressDelay(): PopoverComponentCustomElement['longpressDelay'] {
		return this.nativeElement.longpressDelay;
	}

	/** Whether or not the popover should remain open when the user hovers outside the popover. */
	@Input({ transform: booleanAttribute })
	public set persistentHover(value: PopoverComponentCustomElement['persistentHover']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.persistentHover = value;
		});
	}
	public get persistentHover(): PopoverComponentCustomElement['persistentHover'] {
		return this.nativeElement.persistentHover;
	}

	/** The delay in milliseconds before the popover is shown. */
	@Input({ transform: numberAttribute })
	public set hoverDelay(value: PopoverComponentCustomElement['hoverDelay']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.hoverDelay = value;
		});
	}
	public get hoverDelay(): PopoverComponentCustomElement['hoverDelay'] {
		return this.nativeElement.hoverDelay;
	}

	/** The delay in milliseconds before the popover is dismissed when the user hovers outside of the popover. */
	@Input({ transform: numberAttribute })
	public set hoverDismissDelay(value: PopoverComponentCustomElement['hoverDismissDelay']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.hoverDismissDelay = value;
		});
	}
	public get hoverDismissDelay(): PopoverComponentCustomElement['hoverDismissDelay'] {
		return this.nativeElement.hoverDismissDelay;
	}

	/** The preset to use for the popover. */
	@Input()
	public set preset(value: PopoverComponentCustomElement['preset']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.preset = value;
		});
	}
	public get preset(): PopoverComponentCustomElement['preset'] {
		return this.nativeElement.preset;
	}


	public get overlay(): PopoverComponentCustomElement['overlay'] {
		return this.nativeElement.overlay;
	}


	@Input()
	public set anchorElement(value: PopoverComponentCustomElement['anchorElement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.anchorElement = value;
		});
	}
	public get anchorElement(): PopoverComponentCustomElement['anchorElement'] {
		return this.nativeElement.anchorElement;
	}


	@Input()
	public set anchor(value: PopoverComponentCustomElement['anchor']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.anchor = value;
		});
	}
	public get anchor(): PopoverComponentCustomElement['anchor'] {
		return this.nativeElement.anchor;
	}


	@Input({ transform: booleanAttribute })
	public set noAnchor(value: PopoverComponentCustomElement['noAnchor']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.noAnchor = value;
		});
	}
	public get noAnchor(): PopoverComponentCustomElement['noAnchor'] {
		return this.nativeElement.noAnchor;
	}


	@Input({ transform: booleanAttribute })
	public set open(value: PopoverComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): PopoverComponentCustomElement['open'] {
		return this.nativeElement.open;
	}


	@Input({ transform: booleanAttribute })
	public set inline(value: PopoverComponentCustomElement['inline']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.inline = value;
		});
	}
	public get inline(): PopoverComponentCustomElement['inline'] {
		return this.nativeElement.inline;
	}


	@Input()
	public set placement(value: PopoverComponentCustomElement['placement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.placement = value;
		});
	}
	public get placement(): PopoverComponentCustomElement['placement'] {
		return this.nativeElement.placement;
	}


	@Input()
	public set positionStrategy(value: PopoverComponentCustomElement['positionStrategy']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.positionStrategy = value;
		});
	}
	public get positionStrategy(): PopoverComponentCustomElement['positionStrategy'] {
		return this.nativeElement.positionStrategy;
	}


	@Input()
	public set offset(value: PopoverComponentCustomElement['offset']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.offset = value;
		});
	}
	public get offset(): PopoverComponentCustomElement['offset'] {
		return this.nativeElement.offset;
	}


	@Input({ transform: booleanAttribute })
	public set shift(value: PopoverComponentCustomElement['shift']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.shift = value;
		});
	}
	public get shift(): PopoverComponentCustomElement['shift'] {
		return this.nativeElement.shift;
	}


	@Input()
	public set hide(value: PopoverComponentCustomElement['hide']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.hide = value;
		});
	}
	public get hide(): PopoverComponentCustomElement['hide'] {
		return this.nativeElement.hide;
	}


	@Input({ transform: booleanAttribute })
	public set persistent(value: PopoverComponentCustomElement['persistent']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.persistent = value;
		});
	}
	public get persistent(): PopoverComponentCustomElement['persistent'] {
		return this.nativeElement.persistent;
	}


	@Input()
	public set flip(value: PopoverComponentCustomElement['flip']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.flip = value;
		});
	}
	public get flip(): PopoverComponentCustomElement['flip'] {
		return this.nativeElement.flip;
	}


	@Input()
	public set boundary(value: PopoverComponentCustomElement['boundary']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.boundary = value;
		});
	}
	public get boundary(): PopoverComponentCustomElement['boundary'] {
		return this.nativeElement.boundary;
	}


	@Input()
	public set boundaryElement(value: PopoverComponentCustomElement['boundaryElement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.boundaryElement = value;
		});
	}
	public get boundaryElement(): PopoverComponentCustomElement['boundaryElement'] {
		return this.nativeElement.boundaryElement;
	}


	@Input()
	public set fallbackPlacements(value: PopoverComponentCustomElement['fallbackPlacements']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.fallbackPlacements = value;
		});
	}
	public get fallbackPlacements(): PopoverComponentCustomElement['fallbackPlacements'] {
		return this.nativeElement.fallbackPlacements;
	}


	public hideAsync(...args: Parameters<PopoverComponentCustomElement['hideAsync']>): ReturnType<PopoverComponentCustomElement['hideAsync']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.hideAsync(...args));
	}


	public position(...args: Parameters<PopoverComponentCustomElement['position']>): ReturnType<PopoverComponentCustomElement['position']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.position(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<PopoverComponentCustomElement>,
		protected zone: NgZone
	) {
		definePopoverComponent();
		changeDetectorRef.detach();
	}
}
