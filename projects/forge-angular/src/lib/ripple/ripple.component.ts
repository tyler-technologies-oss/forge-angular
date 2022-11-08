// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { RippleComponent as RippleComponentCustomElement, defineRippleComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-ripple>` custom element. */
@Component({
  selector: 'forge-ripple',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RippleComponent {


	@Input()
	public set target(value: RippleComponentCustomElement['target']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.target = value;
		});
	}

	public get target(): RippleComponentCustomElement['target'] {
		return this.elementRef.nativeElement.target;
	}


	@Input()
	public set unbounded(value: RippleComponentCustomElement['unbounded'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.unbounded = value != null && `${value}` !== 'false';
		});
	}

	public get unbounded(): RippleComponentCustomElement['unbounded'] {
		return this.elementRef.nativeElement.unbounded;
	}


	public layout(...args: Parameters<RippleComponentCustomElement['layout']>): ReturnType<RippleComponentCustomElement['layout']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.layout(...args));
	}


	public activate(...args: Parameters<RippleComponentCustomElement['activate']>): ReturnType<RippleComponentCustomElement['activate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.activate(...args));
	}


	public deactivate(...args: Parameters<RippleComponentCustomElement['deactivate']>): ReturnType<RippleComponentCustomElement['deactivate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.deactivate(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<RippleComponentCustomElement>,
		protected zone: NgZone
	) {
		defineRippleComponent();
		changeDetectorRef.detach();
	}
}
