// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { FloatingActionButtonComponent as FloatingActionButtonComponentCustomElement, defineFloatingActionButtonComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class FloatingActionButtonComponent {

	/** The forge-fab element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Sets the theme of the button. */
	@Input()
	public set theme(value: FloatingActionButtonComponentCustomElement['theme']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.theme = value;
		});
	}
	public get theme(): FloatingActionButtonComponentCustomElement['theme'] {
		return this.nativeElement.theme;
	}

	/** Sets the density of the button. */
	@Input()
	public set density(value: FloatingActionButtonComponentCustomElement['density']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.density = value;
		});
	}
	public get density(): FloatingActionButtonComponentCustomElement['density'] {
		return this.nativeElement.density;
	}

	/** Sets the elevation of the button. */
	@Input()
	public set elevation(value: FloatingActionButtonComponentCustomElement['elevation']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.elevation = value;
		});
	}
	public get elevation(): FloatingActionButtonComponentCustomElement['elevation'] {
		return this.nativeElement.elevation;
	}

	/** The type of button. Defaults to `button`. Valid values are `button`, `submit`, and `reset`. */
	@Input()
	public set type(value: FloatingActionButtonComponentCustomElement['type']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.type = value;
		});
	}
	public get type(): FloatingActionButtonComponentCustomElement['type'] {
		return this.nativeElement.type;
	}

	/** Whether or not the button is disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: FloatingActionButtonComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): FloatingActionButtonComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Whether or not the button shows a built-in popover icon. */
	@Input({ transform: booleanAttribute })
	public set popoverIcon(value: FloatingActionButtonComponentCustomElement['popoverIcon']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.popoverIcon = value;
		});
	}
	public get popoverIcon(): FloatingActionButtonComponentCustomElement['popoverIcon'] {
		return this.nativeElement.popoverIcon;
	}

	/** The name of the button. */
	@Input()
	public set name(value: FloatingActionButtonComponentCustomElement['name']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.name = value;
		});
	}
	public get name(): FloatingActionButtonComponentCustomElement['name'] {
		return this.nativeElement.name;
	}

	/** The form value of the button. */
	@Input()
	public set value(value: FloatingActionButtonComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): FloatingActionButtonComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** Whether or not the button is dense. */
	@Input({ transform: booleanAttribute })
	public set dense(value: FloatingActionButtonComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): FloatingActionButtonComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}

	/** Whether or not the button is an `<a>` element. */
	@Input({ transform: booleanAttribute })
	public set anchor(value: FloatingActionButtonComponentCustomElement['anchor']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.anchor = value;
		});
	}
	public get anchor(): FloatingActionButtonComponentCustomElement['anchor'] {
		return this.nativeElement.anchor;
	}

	/** The href of the anchor. */
	@Input()
	public set href(value: FloatingActionButtonComponentCustomElement['href']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.href = value;
		});
	}
	public get href(): FloatingActionButtonComponentCustomElement['href'] {
		return this.nativeElement.href;
	}

	/** The target of the anchor. */
	@Input()
	public set target(value: FloatingActionButtonComponentCustomElement['target']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.target = value;
		});
	}
	public get target(): FloatingActionButtonComponentCustomElement['target'] {
		return this.nativeElement.target;
	}

	/** The download of the anchor. */
	@Input()
	public set download(value: FloatingActionButtonComponentCustomElement['download']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.download = value;
		});
	}
	public get download(): FloatingActionButtonComponentCustomElement['download'] {
		return this.nativeElement.download;
	}

	/** The rel of the anchor. */
	@Input()
	public set rel(value: FloatingActionButtonComponentCustomElement['rel']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.rel = value;
		});
	}
	public get rel(): FloatingActionButtonComponentCustomElement['rel'] {
		return this.nativeElement.rel;
	}

	/** The form reference of the button if within a `<form>` element. */
	public get form(): FloatingActionButtonComponentCustomElement['form'] {
		return this.nativeElement.form;
	}


	public click(...args: Parameters<FloatingActionButtonComponentCustomElement['click']>): ReturnType<FloatingActionButtonComponentCustomElement['click']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.click(...args));
	}


	public focus(...args: Parameters<FloatingActionButtonComponentCustomElement['focus']>): ReturnType<FloatingActionButtonComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.focus(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<FloatingActionButtonComponentCustomElement>,
		protected zone: NgZone
	) {
		defineFloatingActionButtonComponent();
		changeDetectorRef.detach();
	}
}
