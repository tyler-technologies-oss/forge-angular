// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { CheckboxComponent as CheckboxComponentCustomElement, defineCheckboxComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CheckboxComponent {

	/** The forge-checkbox element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Gets/sets whether the checkbox is checked. */
	@Input({ transform: booleanAttribute })
	public set checked(value: CheckboxComponentCustomElement['checked']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.checked = value;
		});
	}
	public get checked(): CheckboxComponentCustomElement['checked'] {
		return this.nativeElement.checked;
	}

	/** Gets/sets whether the checkbox is checked by default. */
	@Input({ transform: booleanAttribute })
	public set defaultChecked(value: CheckboxComponentCustomElement['defaultChecked']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.defaultChecked = value;
		});
	}
	public get defaultChecked(): CheckboxComponentCustomElement['defaultChecked'] {
		return this.nativeElement.defaultChecked;
	}

	/** Gets/sets the indeterminate state. */
	@Input({ transform: booleanAttribute })
	public set indeterminate(value: CheckboxComponentCustomElement['indeterminate']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.indeterminate = value;
		});
	}
	public get indeterminate(): CheckboxComponentCustomElement['indeterminate'] {
		return this.nativeElement.indeterminate;
	}

	/** Controls the value submitted with a form when checked. */
	@Input()
	public set value(value: CheckboxComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): CheckboxComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Controls whether the checkbox is dense. */
	@Input({ transform: booleanAttribute })
	public set dense(value: CheckboxComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): CheckboxComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}

	/** Controls whether the checkbox is disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: CheckboxComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): CheckboxComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Controls whether the checkbox is required. */
	@Input({ transform: booleanAttribute })
	public set required(value: CheckboxComponentCustomElement['required']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.required = value;
		});
	}
	public get required(): CheckboxComponentCustomElement['required'] {
		return this.nativeElement.required;
	}

	/** Controls whether the checkbox is readonly. */
	@Input({ transform: booleanAttribute })
	public set readonly(value: CheckboxComponentCustomElement['readonly']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.readonly = value;
		});
	}
	public get readonly(): CheckboxComponentCustomElement['readonly'] {
		return this.nativeElement.readonly;
	}

	/** Controls whether the label appears before or after the checkbox. */
	@Input()
	public set labelPosition(value: CheckboxComponentCustomElement['labelPosition']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.labelPosition = value;
		});
	}
	public get labelPosition(): CheckboxComponentCustomElement['labelPosition'] {
		return this.nativeElement.labelPosition;
	}

	/** Toggles the checkbox checked or unchecked. */
	public toggle(...args: Parameters<CheckboxComponentCustomElement['toggle']>): ReturnType<CheckboxComponentCustomElement['toggle']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.toggle(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<CheckboxComponentCustomElement>,
		protected zone: NgZone
	) {
		defineCheckboxComponent();
		changeDetectorRef.detach();
	}
}
