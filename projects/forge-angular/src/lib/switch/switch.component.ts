// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { SwitchComponent as SwitchComponentCustomElement, defineSwitchComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SwitchComponent {

	/** The forge-switch element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Gets/sets whether the switch is checked or not. */
	@Input({ transform: booleanAttribute })
	public set checked(value: SwitchComponentCustomElement['checked']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.checked = value;
		});
	}
	public get checked(): SwitchComponentCustomElement['checked'] {
		return this.nativeElement.checked;
	}

	/** Alias for `checked` _(deprecated)_. Gets/sets whether the switch is checked or not. */
	@Input({ transform: booleanAttribute })
	public set on(value: SwitchComponentCustomElement['on']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.on = value;
		});
	}
	public get on(): SwitchComponentCustomElement['on'] {
		return this.nativeElement.on;
	}

	/** Alias for `checked` _(deprecated)_. */
	@Input({ transform: booleanAttribute })
	public set selected(value: SwitchComponentCustomElement['selected']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selected = value;
		});
	}
	public get selected(): SwitchComponentCustomElement['selected'] {
		return this.nativeElement.selected;
	}

	/** Gets/sets whether the switch is checked by default. */
	@Input({ transform: booleanAttribute })
	public set defaultChecked(value: SwitchComponentCustomElement['defaultChecked']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.defaultChecked = value;
		});
	}
	public get defaultChecked(): SwitchComponentCustomElement['defaultChecked'] {
		return this.nativeElement.defaultChecked;
	}

	/** Alias for `defaultChecked` _(deprecated)_. Gets/sets whether the switch is checked by default. */
	@Input({ transform: booleanAttribute })
	public set defaultOn(value: SwitchComponentCustomElement['defaultOn']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.defaultOn = value;
		});
	}
	public get defaultOn(): SwitchComponentCustomElement['defaultOn'] {
		return this.nativeElement.defaultOn;
	}

	/** Gets/sets the value of the switch. */
	@Input()
	public set value(value: SwitchComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): SwitchComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Controls whether the switch is dense. */
	@Input({ transform: booleanAttribute })
	public set dense(value: SwitchComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): SwitchComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}

	/** Controls whether the switch is disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: SwitchComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): SwitchComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Controls whether the switch is required. */
	@Input({ transform: booleanAttribute })
	public set required(value: SwitchComponentCustomElement['required']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.required = value;
		});
	}
	public get required(): SwitchComponentCustomElement['required'] {
		return this.nativeElement.required;
	}

	/** Controls whether the switch is readonly. */
	@Input({ transform: booleanAttribute })
	public set readonly(value: SwitchComponentCustomElement['readonly']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.readonly = value;
		});
	}
	public get readonly(): SwitchComponentCustomElement['readonly'] {
		return this.nativeElement.readonly;
	}

	/** Controls the presence of the off and on icons. */
	@Input()
	public set icon(value: SwitchComponentCustomElement['icon']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.icon = value;
		});
	}
	public get icon(): SwitchComponentCustomElement['icon'] {
		return this.nativeElement.icon;
	}

	/** Controls whether the label appears before or after the switch. */
	@Input()
	public set labelPosition(value: SwitchComponentCustomElement['labelPosition']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.labelPosition = value;
		});
	}
	public get labelPosition(): SwitchComponentCustomElement['labelPosition'] {
		return this.nativeElement.labelPosition;
	}

	/** Toggles the switch on or off. */
	public toggle(...args: Parameters<SwitchComponentCustomElement['toggle']>): ReturnType<SwitchComponentCustomElement['toggle']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.toggle(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<SwitchComponentCustomElement>,
		protected zone: NgZone
	) {
		defineSwitchComponent();
		changeDetectorRef.detach();
	}
}
