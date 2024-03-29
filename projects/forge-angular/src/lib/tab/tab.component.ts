// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { TabComponent as TabComponentCustomElement, defineTabComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-tab>` custom element. */
@Component({
  selector: 'forge-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TabComponent {

	/** The forge-tab element. */
	public readonly nativeElement = this.elementRef.nativeElement;


	@Input({ transform: booleanAttribute })
	public set disabled(value: TabComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): TabComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}


	@Input({ transform: booleanAttribute })
	public set active(value: TabComponentCustomElement['active']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.active = value;
		});
	}
	public get active(): TabComponentCustomElement['active'] {
		return this.nativeElement.active;
	}


	@Input({ transform: booleanAttribute })
	public set stretch(value: TabComponentCustomElement['stretch']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.stretch = value;
		});
	}
	public get stretch(): TabComponentCustomElement['stretch'] {
		return this.nativeElement.stretch;
	}


	public activate(...args: Parameters<TabComponentCustomElement['activate']>): ReturnType<TabComponentCustomElement['activate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.activate(...args));
	}


	public deactivate(...args: Parameters<TabComponentCustomElement['deactivate']>): ReturnType<TabComponentCustomElement['deactivate']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.deactivate(...args));
	}


	public computeIndicatorBounds(...args: Parameters<TabComponentCustomElement['computeIndicatorBounds']>): ReturnType<TabComponentCustomElement['computeIndicatorBounds']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.computeIndicatorBounds(...args));
	}


	public computeDimensions(...args: Parameters<TabComponentCustomElement['computeDimensions']>): ReturnType<TabComponentCustomElement['computeDimensions']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.computeDimensions(...args));
	}


	public focus(...args: Parameters<TabComponentCustomElement['focus']>): ReturnType<TabComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.focus(...args));
	}


	public setTabIndex(...args: Parameters<TabComponentCustomElement['setTabIndex']>): ReturnType<TabComponentCustomElement['setTabIndex']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.setTabIndex(...args));
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
