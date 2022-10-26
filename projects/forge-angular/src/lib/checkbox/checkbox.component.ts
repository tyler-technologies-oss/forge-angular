// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { CheckboxComponent as CheckboxComponentCustomElement } from '@tylertech/forge';

/** The custom element class behind the `<forge-checkbox>` element. */
@Component({
  selector: 'forge-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CheckboxComponent {

	/** Gets or sets whether or not the checkbox is dense */
	@Input()
	public set dense(value: CheckboxComponentCustomElement['dense'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dense = value != null && `${value}` !== 'false';
		});
	}

	public get dense(): CheckboxComponentCustomElement['dense'] {
		return this.elementRef.nativeElement.dense;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<CheckboxComponentCustomElement>,
		protected zone: NgZone
	) {
		if (!window.customElements.get('forge-checkbox')) {
			window.customElements.define('forge-checkbox', CheckboxComponentCustomElement);
		}
		changeDetectorRef.detach();
	}
}
