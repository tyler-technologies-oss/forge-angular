// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { ListComponent as ListComponentCustomElement, defineListComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-list>` element. */
@Component({
  selector: 'forge-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ListComponent {

	/** Gets/sets whether the list has all static items or not. */
	@Input()
	public set static(value: ListComponentCustomElement['static'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.static = value != null && `${value}` !== 'false';
		});
	}

	public get static(): ListComponentCustomElement['static'] {
		return this.elementRef.nativeElement.static;
	}

	/** Gets/sets whether the list has all dense items or not. */
	@Input()
	public set dense(value: ListComponentCustomElement['dense'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dense = value != null && `${value}` !== 'false';
		});
	}

	public get dense(): ListComponentCustomElement['dense'] {
		return this.elementRef.nativeElement.dense;
	}

	/** Gets/sets whether the list items allow mousedown events through to their underlying list item elements. Default is true. */
	@Input()
	public set propagateClick(value: ListComponentCustomElement['propagateClick'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.propagateClick = value != null && `${value}` !== 'false';
		});
	}

	public get propagateClick(): ListComponentCustomElement['propagateClick'] {
		return this.elementRef.nativeElement.propagateClick;
	}

	/** Gets/sets whether the list items within this list are indented. Default is false. */
	@Input()
	public set indented(value: ListComponentCustomElement['indented'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.indented = value != null && `${value}` !== 'false';
		});
	}

	public get indented(): ListComponentCustomElement['indented'] {
		return this.elementRef.nativeElement.indented;
	}

	/** Gets/sets the selected list item value(s) */
	@Input()
	public set selectedValue(value: ListComponentCustomElement['selectedValue']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.selectedValue = value;
		});
	}

	public get selectedValue(): ListComponentCustomElement['selectedValue'] {
		return this.elementRef.nativeElement.selectedValue;
	}


	public initializedCallback(...args: Parameters<ListComponentCustomElement['initializedCallback']>): ReturnType<ListComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.initializedCallback(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<ListComponentCustomElement>,
		protected zone: NgZone
	) {
		defineListComponent();
		changeDetectorRef.detach();
	}
}
