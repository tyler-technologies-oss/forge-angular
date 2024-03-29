// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { CardComponent as CardComponentCustomElement, defineCardComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-card>` component. */
@Component({
  selector: 'forge-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CardComponent {

	/** The forge-card element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Gets/sets whether the card is using the outlined style or not. */
	@Input({ transform: booleanAttribute })
	public set outlined(value: CardComponentCustomElement['outlined']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.outlined = value;
		});
	}
	public get outlined(): CardComponentCustomElement['outlined'] {
		return this.nativeElement.outlined;
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
