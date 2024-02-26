// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { OptionComponent as OptionComponentCustomElement, defineOptionComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-option>` element. */
@Component({
  selector: 'forge-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class OptionComponent {

	/** The forge-option element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Gets/sets the value of this option. */
	@Input()
	public set value(value: OptionComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): OptionComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Gets/sets the label of this option. */
	@Input()
	public set label(value: OptionComponentCustomElement['label']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.label = value;
		});
	}
	public get label(): OptionComponentCustomElement['label'] {
		return this.nativeElement.label;
	}

	/** Gets/sets the secondary label of this option. */
	@Input()
	public set secondaryLabel(value: OptionComponentCustomElement['secondaryLabel']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.secondaryLabel = value;
		});
	}
	public get secondaryLabel(): OptionComponentCustomElement['secondaryLabel'] {
		return this.nativeElement.secondaryLabel;
	}

	/** Gets/sets the disabled status of this option. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: OptionComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): OptionComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Gets/sets the whether this option is a divider. */
	@Input({ transform: booleanAttribute })
	public set divider(value: OptionComponentCustomElement['divider']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.divider = value;
		});
	}
	public get divider(): OptionComponentCustomElement['divider'] {
		return this.nativeElement.divider;
	}

	/** Gets/sets the classes of this option. */
	@Input()
	public set optionClass(value: OptionComponentCustomElement['optionClass']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.optionClass = value;
		});
	}
	public get optionClass(): OptionComponentCustomElement['optionClass'] {
		return this.nativeElement.optionClass;
	}

	/** Gets/sets the leading icon of this option. */
	@Input()
	public set leadingIcon(value: OptionComponentCustomElement['leadingIcon']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.leadingIcon = value;
		});
	}
	public get leadingIcon(): OptionComponentCustomElement['leadingIcon'] {
		return this.nativeElement.leadingIcon;
	}

	/** Gets/sets the leading icon class of this option. */
	@Input()
	public set leadingIconClass(value: OptionComponentCustomElement['leadingIconClass']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.leadingIconClass = value;
		});
	}
	public get leadingIconClass(): OptionComponentCustomElement['leadingIconClass'] {
		return this.nativeElement.leadingIconClass;
	}

	/** Gets/sets the leading icon type of this option. */
	@Input()
	public set leadingIconType(value: OptionComponentCustomElement['leadingIconType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.leadingIconType = value;
		});
	}
	public get leadingIconType(): OptionComponentCustomElement['leadingIconType'] {
		return this.nativeElement.leadingIconType;
	}

	/** Gets/sets properties on leading icon component. */
	@Input()
	public set leadingIconComponentProps(value: OptionComponentCustomElement['leadingIconComponentProps']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.leadingIconComponentProps = value;
		});
	}
	public get leadingIconComponentProps(): OptionComponentCustomElement['leadingIconComponentProps'] {
		return this.nativeElement.leadingIconComponentProps;
	}

	/** Gets/sets the trailing icon of this option. */
	@Input()
	public set trailingIcon(value: OptionComponentCustomElement['trailingIcon']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.trailingIcon = value;
		});
	}
	public get trailingIcon(): OptionComponentCustomElement['trailingIcon'] {
		return this.nativeElement.trailingIcon;
	}

	/** Gets/sets the trailing icon class of this option. */
	@Input()
	public set trailingIconClass(value: OptionComponentCustomElement['trailingIconClass']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.trailingIconClass = value;
		});
	}
	public get trailingIconClass(): OptionComponentCustomElement['trailingIconClass'] {
		return this.nativeElement.trailingIconClass;
	}

	/** Gets/sets the trailing icon type of this option. */
	@Input()
	public set trailingIconType(value: OptionComponentCustomElement['trailingIconType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.trailingIconType = value;
		});
	}
	public get trailingIconType(): OptionComponentCustomElement['trailingIconType'] {
		return this.nativeElement.trailingIconType;
	}

	/** Gets/sets properties on trailing icon component. */
	@Input()
	public set trailingIconComponentProps(value: OptionComponentCustomElement['trailingIconComponentProps']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.trailingIconComponentProps = value;
		});
	}
	public get trailingIconComponentProps(): OptionComponentCustomElement['trailingIconComponentProps'] {
		return this.nativeElement.trailingIconComponentProps;
	}

	/** Gets/sets the leading builder of this option. */
	@Input()
	public set leadingBuilder(value: OptionComponentCustomElement['leadingBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.leadingBuilder = value;
		});
	}
	public get leadingBuilder(): OptionComponentCustomElement['leadingBuilder'] {
		return this.nativeElement.leadingBuilder;
	}

	/** Gets/sets the trailing builder of this option. */
	@Input()
	public set trailingBuilder(value: OptionComponentCustomElement['trailingBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.trailingBuilder = value;
		});
	}
	public get trailingBuilder(): OptionComponentCustomElement['trailingBuilder'] {
		return this.nativeElement.trailingBuilder;
	}


	public initializedCallback(...args: Parameters<OptionComponentCustomElement['initializedCallback']>): ReturnType<OptionComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.initializedCallback(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<OptionComponentCustomElement>,
		protected zone: NgZone
	) {
		defineOptionComponent();
		changeDetectorRef.detach();
	}
}
