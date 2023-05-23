// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { StackComponent as StackComponentCustomElement, defineStackComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-stack>` component. */
@Component({
  selector: 'forge-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StackComponent {

	/** Controls the direction of the stack. */
	@Input()
	public set inline(value: StackComponentCustomElement['inline'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.inline = value != null && `${value}` !== 'false';
		});
	}

	public get inline(): StackComponentCustomElement['inline'] {
		return this.elementRef.nativeElement.inline;
	}

	/** Controls if items wrap to a new line in inline mode */
	@Input()
	public set wrap(value: StackComponentCustomElement['wrap'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.wrap = value != null && `${value}` !== 'false';
		});
	}

	public get wrap(): StackComponentCustomElement['wrap'] {
		return this.elementRef.nativeElement.wrap;
	}

	/** Controls if items stretch and take up the maximum amount of space */
	@Input()
	public set stretch(value: StackComponentCustomElement['stretch'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.stretch = value != null && `${value}` !== 'false';
		});
	}

	public get stretch(): StackComponentCustomElement['stretch'] {
		return this.elementRef.nativeElement.stretch;
	}

	/** Controls the gap between the children within the stack */
	@Input()
	public set gap(value: StackComponentCustomElement['gap']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.gap = value;
		});
	}

	public get gap(): StackComponentCustomElement['gap'] {
		return this.elementRef.nativeElement.gap;
	}

	/** Controls if stack items are at the end of the row or column */
	@Input()
	public set alignment(value: StackComponentCustomElement['alignment']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.alignment = value;
		});
	}

	public get alignment(): StackComponentCustomElement['alignment'] {
		return this.elementRef.nativeElement.alignment;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<StackComponentCustomElement>,
		protected zone: NgZone
	) {
		defineStackComponent();
		changeDetectorRef.detach();
	}
}
