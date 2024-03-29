// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { BadgeComponent as BadgeComponentCustomElement, defineBadgeComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-badge>` custom element. */
@Component({
  selector: 'forge-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BadgeComponent {

	/** The forge-badge element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Controls whether the component renders a simple dot/circle, or allows for content. */
	@Input({ transform: booleanAttribute })
	public set dot(value: BadgeComponentCustomElement['dot']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dot = value;
		});
	}
	public get dot(): BadgeComponentCustomElement['dot'] {
		return this.nativeElement.dot;
	}

	/** Controls the visibility state. */
	@Input({ transform: booleanAttribute })
	public set open(value: BadgeComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): BadgeComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<BadgeComponentCustomElement>,
		protected zone: NgZone
	) {
		defineBadgeComponent();
		changeDetectorRef.detach();
	}
}
