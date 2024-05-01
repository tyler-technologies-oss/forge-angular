// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ButtonToggleGroupComponent as ButtonToggleGroupComponentCustomElement, defineButtonToggleGroupComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-button-toggle-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ButtonToggleGroupComponent {

	/** The forge-button-toggle-group element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The value of the selected button toggle(s). */
	@Input()
	public set value(value: ButtonToggleGroupComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): ButtonToggleGroupComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Whether or not the group should be outlined. */
	@Input({ transform: booleanAttribute })
	public set outlined(value: ButtonToggleGroupComponentCustomElement['outlined']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.outlined = value;
		});
	}
	public get outlined(): ButtonToggleGroupComponentCustomElement['outlined'] {
		return this.nativeElement.outlined;
	}

	/** Whether or not the group should allow multiple selections. */
	@Input({ transform: booleanAttribute })
	public set multiple(value: ButtonToggleGroupComponentCustomElement['multiple']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.multiple = value;
		});
	}
	public get multiple(): ButtonToggleGroupComponentCustomElement['multiple'] {
		return this.nativeElement.multiple;
	}

	/** Whether or not the group should require a selection once a button has been toggled on. */
	@Input({ transform: booleanAttribute })
	public set mandatory(value: ButtonToggleGroupComponentCustomElement['mandatory']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.mandatory = value;
		});
	}
	public get mandatory(): ButtonToggleGroupComponentCustomElement['mandatory'] {
		return this.nativeElement.mandatory;
	}

	/** Whether or not the group should be displayed vertically. */
	@Input({ transform: booleanAttribute })
	public set vertical(value: ButtonToggleGroupComponentCustomElement['vertical']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.vertical = value;
		});
	}
	public get vertical(): ButtonToggleGroupComponentCustomElement['vertical'] {
		return this.nativeElement.vertical;
	}

	/** Whether or not the group should stretch to fill the available width. */
	@Input({ transform: booleanAttribute })
	public set stretch(value: ButtonToggleGroupComponentCustomElement['stretch']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.stretch = value;
		});
	}
	public get stretch(): ButtonToggleGroupComponentCustomElement['stretch'] {
		return this.nativeElement.stretch;
	}

	/** Whether or not the group should be dense. */
	@Input({ transform: booleanAttribute })
	public set dense(value: ButtonToggleGroupComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): ButtonToggleGroupComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}

	/** Whether or not the group should be disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: ButtonToggleGroupComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): ButtonToggleGroupComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}


	@Input({ transform: booleanAttribute })
	public set required(value: ButtonToggleGroupComponentCustomElement['required']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.required = value;
		});
	}
	public get required(): ButtonToggleGroupComponentCustomElement['required'] {
		return this.nativeElement.required;
	}

	/** Whether or not the group should be readonly. */
	@Input({ transform: booleanAttribute })
	public set readonly(value: ButtonToggleGroupComponentCustomElement['readonly']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.readonly = value;
		});
	}
	public get readonly(): ButtonToggleGroupComponentCustomElement['readonly'] {
		return this.nativeElement.readonly;
	}

	/** The theme to use for the group. */
	@Input()
	public set theme(value: ButtonToggleGroupComponentCustomElement['theme']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.theme = value;
		});
	}
	public get theme(): ButtonToggleGroupComponentCustomElement['theme'] {
		return this.nativeElement.theme;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ButtonToggleGroupComponentCustomElement>,
		protected zone: NgZone
	) {
		defineButtonToggleGroupComponent();
		changeDetectorRef.detach();
	}
}
