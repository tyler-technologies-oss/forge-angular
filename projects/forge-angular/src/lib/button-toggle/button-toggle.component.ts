// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ButtonToggleComponent as ButtonToggleComponentCustomElement, defineButtonToggleComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-button-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ButtonToggleComponent {

	/** The forge-button-toggle element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The value of the button toggle. */
	@Input()
	public set value(value: ButtonToggleComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): ButtonToggleComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Whether or not the button is selected. */
	@Input({ transform: booleanAttribute })
	public set selected(value: ButtonToggleComponentCustomElement['selected']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selected = value;
		});
	}
	public get selected(): ButtonToggleComponentCustomElement['selected'] {
		return this.nativeElement.selected;
	}

	/** Whether or not the button is disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: ButtonToggleComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): ButtonToggleComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Whether or not the button is readonly. */
	@Input({ transform: booleanAttribute })
	public set readonly(value: ButtonToggleComponentCustomElement['readonly']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.readonly = value;
		});
	}
	public get readonly(): ButtonToggleComponentCustomElement['readonly'] {
		return this.nativeElement.readonly;
	}


	public focus(...args: Parameters<ButtonToggleComponentCustomElement['focus']>): ReturnType<ButtonToggleComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.focus(...args));
	}


	public click(...args: Parameters<ButtonToggleComponentCustomElement['click']>): ReturnType<ButtonToggleComponentCustomElement['click']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.click(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ButtonToggleComponentCustomElement>,
		protected zone: NgZone
	) {
		defineButtonToggleComponent();
		changeDetectorRef.detach();
	}
}
