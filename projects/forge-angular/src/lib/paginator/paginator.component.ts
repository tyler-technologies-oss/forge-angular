// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { PaginatorComponent as PaginatorComponentCustomElement, definePaginatorComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-paginator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class PaginatorComponent {

	/** The forge-paginator element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The zero-based page index. */
	@Input({ transform: numberAttribute })
	public set pageIndex(value: PaginatorComponentCustomElement['pageIndex']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.pageIndex = value;
		});
	}
	public get pageIndex(): PaginatorComponentCustomElement['pageIndex'] {
		return this.nativeElement.pageIndex;
	}

	/** Number of items to display on a page. */
	@Input({ transform: numberAttribute })
	public set pageSize(value: PaginatorComponentCustomElement['pageSize']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.pageSize = value;
		});
	}
	public get pageSize(): PaginatorComponentCustomElement['pageSize'] {
		return this.nativeElement.pageSize;
	}

	/** Sets page index by providing the number of items to skip. The getter for this property returns the number of items to skip. */
	@Input({ transform: numberAttribute })
	public set offset(value: PaginatorComponentCustomElement['offset']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.offset = value;
		});
	}
	public get offset(): PaginatorComponentCustomElement['offset'] {
		return this.nativeElement.offset;
	}

	/** The total number of items to be paginated. */
	@Input({ transform: numberAttribute })
	public set total(value: PaginatorComponentCustomElement['total']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.total = value;
		});
	}
	public get total(): PaginatorComponentCustomElement['total'] {
		return this.nativeElement.total;
	}

	/** The set of provided page size options to display to the user. */
	@Input()
	public set pageSizeOptions(value: PaginatorComponentCustomElement['pageSizeOptions']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.pageSizeOptions = value;
		});
	}
	public get pageSizeOptions(): PaginatorComponentCustomElement['pageSizeOptions'] {
		return this.nativeElement.pageSizeOptions;
	}

	/** A label for the paginator. */
	@Input()
	public set label(value: PaginatorComponentCustomElement['label']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.label = value;
		});
	}
	public get label(): PaginatorComponentCustomElement['label'] {
		return this.nativeElement.label;
	}

	/** Whether to show the first page and last page buttons. */
	@Input({ transform: booleanAttribute })
	public set firstLast(value: PaginatorComponentCustomElement['firstLast']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.firstLast = value;
		});
	}
	public get firstLast(): PaginatorComponentCustomElement['firstLast'] {
		return this.nativeElement.firstLast;
	}

	/** Whether to show the first page button. Default is false. */
	@Input({ transform: booleanAttribute })
	public set first(value: PaginatorComponentCustomElement['first']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.first = value;
		});
	}
	public get first(): PaginatorComponentCustomElement['first'] {
		return this.nativeElement.first;
	}

	/** Whether the paginator is disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: PaginatorComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): PaginatorComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Whether to use the alternative range label slot. */
	@Input({ transform: booleanAttribute })
	public set alternative(value: PaginatorComponentCustomElement['alternative']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.alternative = value;
		});
	}
	public get alternative(): PaginatorComponentCustomElement['alternative'] {
		return this.nativeElement.alternative;
	}

	/** A callback function to build the range label dynamically. */
	@Input()
	public set rangeLabelCallback(value: PaginatorComponentCustomElement['rangeLabelCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.rangeLabelCallback = value;
		});
	}
	public get rangeLabelCallback(): PaginatorComponentCustomElement['rangeLabelCallback'] {
		return this.nativeElement.rangeLabelCallback;
	}

	/** Sets focus to the first focusable element within the paginator. */
	public focus(...args: Parameters<PaginatorComponentCustomElement['focus']>): ReturnType<PaginatorComponentCustomElement['focus']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.focus(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<PaginatorComponentCustomElement>,
		protected zone: NgZone
	) {
		definePaginatorComponent();
		changeDetectorRef.detach();
	}
}
