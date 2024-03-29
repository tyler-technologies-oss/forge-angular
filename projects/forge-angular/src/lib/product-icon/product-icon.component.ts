// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { ProductIconComponent as ProductIconComponentCustomElement, defineProductIconComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-product-icon>` custom element. */
@Component({
  selector: 'forge-product-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ProductIconComponent {

	/** The forge-product-icon element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The color of the container element from the material color palette. */
	@Input()
	public set color(value: ProductIconComponentCustomElement['color']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.color = value;
		});
	}
	public get color(): ProductIconComponentCustomElement['color'] {
		return this.nativeElement.color;
	}

	/** Controls the height and width of the container element. */
	@Input({ transform: numberAttribute })
	public set size(value: ProductIconComponentCustomElement['size']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.size = value;
		});
	}
	public get size(): ProductIconComponentCustomElement['size'] {
		return this.nativeElement.size;
	}

	/** Controls the visibility of the text shadow. */
	@Input({ transform: booleanAttribute })
	public set shadow(value: ProductIconComponentCustomElement['shadow']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.shadow = value;
		});
	}
	public get shadow(): ProductIconComponentCustomElement['shadow'] {
		return this.nativeElement.shadow;
	}

	/** The number of iterations to apply the text shadow. */
	@Input({ transform: numberAttribute })
	public set iterations(value: ProductIconComponentCustomElement['iterations']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.iterations = value;
		});
	}
	public get iterations(): ProductIconComponentCustomElement['iterations'] {
		return this.nativeElement.iterations;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ProductIconComponentCustomElement>,
		protected zone: NgZone
	) {
		defineProductIconComponent();
		changeDetectorRef.detach();
	}
}
