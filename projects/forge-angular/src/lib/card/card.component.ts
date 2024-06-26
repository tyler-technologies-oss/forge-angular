// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { CardComponent as CardComponentCustomElement, defineCardComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CardComponent {

	/** The forge-card element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Whether the card has elevation or not. */
	@Input({ transform: booleanAttribute })
	public set raised(value: CardComponentCustomElement['raised']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.raised = value;
		});
	}
	public get raised(): CardComponentCustomElement['raised'] {
		return this.nativeElement.raised;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<CardComponentCustomElement>,
		protected zone: NgZone
	) {
		defineCardComponent();
		changeDetectorRef.detach();
	}
}
