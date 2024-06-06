// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { LabelValueComponent as LabelValueComponentCustomElement, defineLabelValueComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-label-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class LabelValueComponent {

	/** The forge-label-value element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** If true, the value will be displayed in an alternative emphasized style. */
	@Input({ transform: booleanAttribute })
	public set empty(value: LabelValueComponentCustomElement['empty']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.empty = value;
		});
	}
	public get empty(): LabelValueComponentCustomElement['empty'] {
		return this.nativeElement.empty;
	}

	/** If true, the value will be truncated with an ellipsis if it overflows its container. */
	@Input({ transform: booleanAttribute })
	public set ellipsis(value: LabelValueComponentCustomElement['ellipsis']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.ellipsis = value;
		});
	}
	public get ellipsis(): LabelValueComponentCustomElement['ellipsis'] {
		return this.nativeElement.ellipsis;
	}

	/** If true, the label and value will be displayed on the same line. */
	@Input({ transform: booleanAttribute })
	public set inline(value: LabelValueComponentCustomElement['inline']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.inline = value;
		});
	}
	public get inline(): LabelValueComponentCustomElement['inline'] {
		return this.nativeElement.inline;
	}

	/** Deprecated. Use `inline` instead. */
	@Input({ transform: booleanAttribute })
	public set dense(value: LabelValueComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): LabelValueComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<LabelValueComponentCustomElement>,
		protected zone: NgZone
	) {
		defineLabelValueComponent();
		changeDetectorRef.detach();
	}
}
