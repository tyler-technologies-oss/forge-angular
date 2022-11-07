// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { TabComponent as TabComponentCustomElement, defineTabComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-tab>` custom element. */
@Component({
  selector: 'forge-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TabComponent {


	@Input()
	public set disabled(value: TabComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): TabComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}


	@Input()
	public set active(value: TabComponentCustomElement['active'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.active = value != null && `${value}` !== 'false';
		});
	}

	public get active(): TabComponentCustomElement['active'] {
		return this.elementRef.nativeElement.active;
	}


	@Input()
	public set stretch(value: TabComponentCustomElement['stretch'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.stretch = value != null && `${value}` !== 'false';
		});
	}

	public get stretch(): TabComponentCustomElement['stretch'] {
		return this.elementRef.nativeElement.stretch;
	}


	public activate(...args: Parameters<TabComponentCustomElement['activate']>): ReturnType<TabComponentCustomElement['activate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.activate(...args));
	}


	public deactivate(...args: Parameters<TabComponentCustomElement['deactivate']>): ReturnType<TabComponentCustomElement['deactivate']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.deactivate(...args));
	}


	public computeIndicatorBounds(...args: Parameters<TabComponentCustomElement['computeIndicatorBounds']>): ReturnType<TabComponentCustomElement['computeIndicatorBounds']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.computeIndicatorBounds(...args));
	}


	public computeDimensions(...args: Parameters<TabComponentCustomElement['computeDimensions']>): ReturnType<TabComponentCustomElement['computeDimensions']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.computeDimensions(...args));
	}


	public focus(...args: Parameters<TabComponentCustomElement['focus']>): ReturnType<TabComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.focus(...args));
	}


	public setTabIndex(...args: Parameters<TabComponentCustomElement['setTabIndex']>): ReturnType<TabComponentCustomElement['setTabIndex']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.setTabIndex(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<TabComponentCustomElement>,
		protected zone: NgZone
	) {
		defineTabComponent();
		changeDetectorRef.detach();
	}
}
