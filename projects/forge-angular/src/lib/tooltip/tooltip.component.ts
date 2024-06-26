// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { TooltipComponent as TooltipComponentCustomElement, defineTooltipComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TooltipComponent {

	/** The forge-tooltip element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Whether or not the tooltip is open. */
	@Input({ transform: booleanAttribute })
	public set open(value: TooltipComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): TooltipComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	/** The type of tooltip. Valid values are `presentation` (default), `label`, and `description`. */
	@Input()
	public set type(value: TooltipComponentCustomElement['type']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.type = value;
		});
	}
	public get type(): TooltipComponentCustomElement['type'] {
		return this.nativeElement.type;
	}

	/** The id of the element that the tooltip is anchored to. */
	@Input()
	public set anchor(value: TooltipComponentCustomElement['anchor']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.anchor = value;
		});
	}
	public get anchor(): TooltipComponentCustomElement['anchor'] {
		return this.nativeElement.anchor;
	}


	@Input()
	public set anchorElement(value: TooltipComponentCustomElement['anchorElement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.anchorElement = value;
		});
	}
	public get anchorElement(): TooltipComponentCustomElement['anchorElement'] {
		return this.nativeElement.anchorElement;
	}


	@Input()
	public set target(value: TooltipComponentCustomElement['target']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.target = value;
		});
	}
	public get target(): TooltipComponentCustomElement['target'] {
		return this.nativeElement.target;
	}

	/** The placement of the tooltip relative to the anchor element. */
	@Input()
	public set placement(value: TooltipComponentCustomElement['placement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.placement = value;
		});
	}
	public get placement(): TooltipComponentCustomElement['placement'] {
		return this.nativeElement.placement;
	}


	@Input()
	public set position(value: TooltipComponentCustomElement['position']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.position = value;
		});
	}
	public get position(): TooltipComponentCustomElement['position'] {
		return this.nativeElement.position;
	}

	/** The delay in milliseconds before the tooltip is shown. */
	@Input({ transform: numberAttribute })
	public set delay(value: TooltipComponentCustomElement['delay']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.delay = value;
		});
	}
	public get delay(): TooltipComponentCustomElement['delay'] {
		return this.nativeElement.delay;
	}

	/** The offset in pixels between the tooltip and the anchor element. */
	@Input({ transform: numberAttribute })
	public set offset(value: TooltipComponentCustomElement['offset']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.offset = value;
		});
	}
	public get offset(): TooltipComponentCustomElement['offset'] {
		return this.nativeElement.offset;
	}

	/** How the tooltip should place itself if there is not enough space at the desired placement. */
	@Input()
	public set flip(value: TooltipComponentCustomElement['flip']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.flip = value;
		});
	}
	public get flip(): TooltipComponentCustomElement['flip'] {
		return this.nativeElement.flip;
	}

	/** The id of the element that the tooltip should be constrained to. */
	@Input()
	public set boundary(value: TooltipComponentCustomElement['boundary']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.boundary = value;
		});
	}
	public get boundary(): TooltipComponentCustomElement['boundary'] {
		return this.nativeElement.boundary;
	}

	/** The element that the tooltip should be constrained to. */
	@Input()
	public set boundaryElement(value: TooltipComponentCustomElement['boundaryElement']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.boundaryElement = value;
		});
	}
	public get boundaryElement(): TooltipComponentCustomElement['boundaryElement'] {
		return this.nativeElement.boundaryElement;
	}

	/** The fallback placements of the tooltip relative to the anchor element. */
	@Input()
	public set fallbackPlacements(value: TooltipComponentCustomElement['fallbackPlacements']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.fallbackPlacements = value;
		});
	}
	public get fallbackPlacements(): TooltipComponentCustomElement['fallbackPlacements'] {
		return this.nativeElement.fallbackPlacements;
	}

	/** The trigger type(s) that will open the tooltip. Valid values are `hover` (default), `longpress`, and `focus`. */
	@Input()
	public set triggerType(value: TooltipComponentCustomElement['triggerType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.triggerType = value;
		});
	}
	public get triggerType(): TooltipComponentCustomElement['triggerType'] {
		return this.nativeElement.triggerType;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<TooltipComponentCustomElement>,
		protected zone: NgZone
	) {
		defineTooltipComponent();
		changeDetectorRef.detach();
	}
}
