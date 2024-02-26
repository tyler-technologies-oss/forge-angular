// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { ViewSwitcherComponent as ViewSwitcherComponentCustomElement, defineViewSwitcherComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-view-switcher>` custom element. */
@Component({
  selector: 'forge-view-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ViewSwitcherComponent {

	/** The forge-view-switcher element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Gets/sets the currently visible view index. */
	@Input({ transform: numberAttribute })
	public set index(value: ViewSwitcherComponentCustomElement['index']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.index = value;
		});
	}
	public get index(): ViewSwitcherComponentCustomElement['index'] {
		return this.nativeElement.index;
	}

	/** Gets/sets the animation type. */
	@Input()
	public set animationType(value: ViewSwitcherComponentCustomElement['animationType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.animationType = value;
		});
	}
	public get animationType(): ViewSwitcherComponentCustomElement['animationType'] {
		return this.nativeElement.animationType;
	}

	/** Transitions to the next view. */
	public next(...args: Parameters<ViewSwitcherComponentCustomElement['next']>): ReturnType<ViewSwitcherComponentCustomElement['next']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.next(...args));
	}

	/** Transitions to the previous view. */
	public previous(...args: Parameters<ViewSwitcherComponentCustomElement['previous']>): ReturnType<ViewSwitcherComponentCustomElement['previous']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.previous(...args));
	}

	/** Transitions to the first view. */
	public goToStart(...args: Parameters<ViewSwitcherComponentCustomElement['goToStart']>): ReturnType<ViewSwitcherComponentCustomElement['goToStart']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.goToStart(...args));
	}

	/** Transitions to the last view. */
	public goToEnd(...args: Parameters<ViewSwitcherComponentCustomElement['goToEnd']>): ReturnType<ViewSwitcherComponentCustomElement['goToEnd']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.goToEnd(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ViewSwitcherComponentCustomElement>,
		protected zone: NgZone
	) {
		defineViewSwitcherComponent();
		changeDetectorRef.detach();
	}
}
