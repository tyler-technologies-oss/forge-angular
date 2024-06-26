// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { TableComponent as TableComponentCustomElement, defineTableComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TableComponent {

	/** The forge-table element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The data to be display in the table body. */
	@Input()
	public set data(value: TableComponentCustomElement['data']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.data = value;
		});
	}
	public get data(): TableComponentCustomElement['data'] {
		return this.nativeElement.data;
	}

	/** The column configuration options. */
	@Input()
	public set columnConfigurations(value: TableComponentCustomElement['columnConfigurations']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.columnConfigurations = value;
		});
	}
	public get columnConfigurations(): TableComponentCustomElement['columnConfigurations'] {
		return this.nativeElement.columnConfigurations;
	}

	/** Controls the visibility of the select column. */
	@Input({ transform: booleanAttribute })
	public set select(value: TableComponentCustomElement['select']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.select = value;
		});
	}
	public get select(): TableComponentCustomElement['select'] {
		return this.nativeElement.select;
	}

	/** Controls the visibility of the select all checkbox (only applied when `select` is `true`). */
	@Input({ transform: booleanAttribute })
	public set multiselect(value: TableComponentCustomElement['multiselect']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.multiselect = value;
		});
	}
	public get multiselect(): TableComponentCustomElement['multiselect'] {
		return this.nativeElement.multiselect;
	}

	/** The row key for matching data to selections. */
	@Input()
	public set selectKey(value: TableComponentCustomElement['selectKey']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectKey = value;
		});
	}
	public get selectKey(): TableComponentCustomElement['selectKey'] {
		return this.nativeElement.selectKey;
	}

	/** The tooltip to display when hovering over the select column. */
	@Input()
	public set tooltipSelect(value: TableComponentCustomElement['tooltipSelect']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.tooltipSelect = value;
		});
	}
	public get tooltipSelect(): TableComponentCustomElement['tooltipSelect'] {
		return this.nativeElement.tooltipSelect;
	}

	/** The tooltip to display when hovering over the select all checkbox. */
	@Input()
	public set tooltipSelectAll(value: TableComponentCustomElement['tooltipSelectAll']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.tooltipSelectAll = value;
		});
	}
	public get tooltipSelectAll(): TableComponentCustomElement['tooltipSelectAll'] {
		return this.nativeElement.tooltipSelectAll;
	}

	/** Controls whether the table is dense or not. */
	@Input({ transform: booleanAttribute })
	public set dense(value: TableComponentCustomElement['dense']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.dense = value;
		});
	}
	public get dense(): TableComponentCustomElement['dense'] {
		return this.nativeElement.dense;
	}

	/** Controls whether the table is roomy or not. */
	@Input({ transform: booleanAttribute })
	public set roomy(value: TableComponentCustomElement['roomy']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.roomy = value;
		});
	}
	public get roomy(): TableComponentCustomElement['roomy'] {
		return this.nativeElement.roomy;
	}

	/** Controls whether the table shows its column filter row. */
	@Input({ transform: booleanAttribute })
	public set filter(value: TableComponentCustomElement['filter']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.filter = value;
		});
	}
	public get filter(): TableComponentCustomElement['filter'] {
		return this.nativeElement.filter;
	}

	/** Controls whether the table applies fixed headers when in scroll containers. */
	@Input({ transform: booleanAttribute })
	public set fixedHeaders(value: TableComponentCustomElement['fixedHeaders']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.fixedHeaders = value;
		});
	}
	public get fixedHeaders(): TableComponentCustomElement['fixedHeaders'] {
		return this.nativeElement.fixedHeaders;
	}

	/** Controls the table layout algorithm. */
	@Input()
	public set layoutType(value: TableComponentCustomElement['layoutType']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.layoutType = value;
		});
	}
	public get layoutType(): TableComponentCustomElement['layoutType'] {
		return this.nativeElement.layoutType;
	}

	/** Controls whether the content in each cell wraps or not (true by default). */
	@Input({ transform: booleanAttribute })
	public set wrapContent(value: TableComponentCustomElement['wrapContent']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.wrapContent = value;
		});
	}
	public get wrapContent(): TableComponentCustomElement['wrapContent'] {
		return this.nativeElement.wrapContent;
	}

	/** Controls whether the columns are resizable or not. */
	@Input({ transform: booleanAttribute })
	public set resizable(value: TableComponentCustomElement['resizable']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.resizable = value;
		});
	}
	public get resizable(): TableComponentCustomElement['resizable'] {
		return this.nativeElement.resizable;
	}

	/** Gets/sets the minimum width that a column can be resized to by the user dragging the resize handle. */
	@Input({ transform: numberAttribute })
	public set minResizeWidth(value: TableComponentCustomElement['minResizeWidth']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.minResizeWidth = value;
		});
	}
	public get minResizeWidth(): TableComponentCustomElement['minResizeWidth'] {
		return this.nativeElement.minResizeWidth;
	}

	/** Gets/sets whether the rows respond to (and emit) row click events. */
	@Input({ transform: booleanAttribute })
	public set allowRowClick(value: TableComponentCustomElement['allowRowClick']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.allowRowClick = value;
		});
	}
	public get allowRowClick(): TableComponentCustomElement['allowRowClick'] {
		return this.nativeElement.allowRowClick;
	}

	/** Gets/sets whether the table supports multi-column sorting. */
	@Input({ transform: booleanAttribute })
	public set multiColumnSort(value: TableComponentCustomElement['multiColumnSort']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.multiColumnSort = value;
		});
	}
	public get multiColumnSort(): TableComponentCustomElement['multiColumnSort'] {
		return this.nativeElement.multiColumnSort;
	}

	/** Callback for when a row is clicked. This allows for custom logic to run after each `<tr>` is created. */
	@Input()
	public set rowCreated(value: TableComponentCustomElement['rowCreated']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.rowCreated = value;
		});
	}
	public get rowCreated(): TableComponentCustomElement['rowCreated'] {
		return this.nativeElement.rowCreated;
	}

	/** Callback for when a cell is clicked. This allows for custom logic to run after each `<td>` is created. */
	@Input()
	public set cellCreated(value: TableComponentCustomElement['cellCreated']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.cellCreated = value;
		});
	}
	public get cellCreated(): TableComponentCustomElement['cellCreated'] {
		return this.nativeElement.cellCreated;
	}

	/** The template to use for the select all checkbox in the header. */
	@Input()
	public set selectAllTemplate(value: TableComponentCustomElement['selectAllTemplate']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectAllTemplate = value;
		});
	}
	public get selectAllTemplate(): TableComponentCustomElement['selectAllTemplate'] {
		return this.nativeElement.selectAllTemplate;
	}

	/** Controls the alignment of the select checkbox. */
	@Input()
	public set selectCheckboxAlignment(value: TableComponentCustomElement['selectCheckboxAlignment']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selectCheckboxAlignment = value;
		});
	}
	public get selectCheckboxAlignment(): TableComponentCustomElement['selectCheckboxAlignment'] {
		return this.nativeElement.selectCheckboxAlignment;
	}

	/** Hides a column from the table. */
	public hideColumn(...args: Parameters<TableComponentCustomElement['hideColumn']>): ReturnType<TableComponentCustomElement['hideColumn']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.hideColumn(...args));
	}

	/** Shows a hidden column in th table. */
	public showColumn(...args: Parameters<TableComponentCustomElement['showColumn']>): ReturnType<TableComponentCustomElement['showColumn']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.showColumn(...args));
	}

	/** Determines if a column at the given index is hidden or not. */
	public isColumnHidden(...args: Parameters<TableComponentCustomElement['isColumnHidden']>): ReturnType<TableComponentCustomElement['isColumnHidden']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.isColumnHidden(...args));
	}

	/** Returns the selected row instances. */
	public getSelectedRows(...args: Parameters<TableComponentCustomElement['getSelectedRows']>): ReturnType<TableComponentCustomElement['getSelectedRows']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.getSelectedRows(...args));
	}

	/** Selects a row in the table. Only applicable if `select` is true. */
	public selectRow(...args: Parameters<TableComponentCustomElement['selectRow']>): ReturnType<TableComponentCustomElement['selectRow']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.selectRow(...args));
	}

	/** Selects one or more rows in the table. Only applicable if `select` is true. */
	public selectRows(...args: Parameters<TableComponentCustomElement['selectRows']>): ReturnType<TableComponentCustomElement['selectRows']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.selectRows(...args));
	}

	/** Deselects a single row in the table. */
	public deselectRow(...args: Parameters<TableComponentCustomElement['deselectRow']>): ReturnType<TableComponentCustomElement['deselectRow']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.deselectRow(...args));
	}

	/** Deselects one or more rows in the table. */
	public deselectRows(...args: Parameters<TableComponentCustomElement['deselectRows']>): ReturnType<TableComponentCustomElement['deselectRows']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.deselectRows(...args));
	}

	/** Clears all selected table rows. */
	public clearSelections(...args: Parameters<TableComponentCustomElement['clearSelections']>): ReturnType<TableComponentCustomElement['clearSelections']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.clearSelections(...args));
	}

	/** Forces the table to re-render based on its current configuration. */
	public render(...args: Parameters<TableComponentCustomElement['render']>): ReturnType<TableComponentCustomElement['render']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.render(...args));
	}

	/** Expands a collapsed row. */
	public expandRow(...args: Parameters<TableComponentCustomElement['expandRow']>): ReturnType<TableComponentCustomElement['expandRow']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.expandRow(...args));
	}

	/** Collapses an expanded row. */
	public collapseRow(...args: Parameters<TableComponentCustomElement['collapseRow']>): ReturnType<TableComponentCustomElement['collapseRow']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.collapseRow(...args));
	}

	/** Checks if a row is expanded or not. */
	public isRowExpanded(...args: Parameters<TableComponentCustomElement['isRowExpanded']>): ReturnType<TableComponentCustomElement['isRowExpanded']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.isRowExpanded(...args));
	}

	/** Selects a rows by an index or array of indexes. */
	public selectRowsByIndex(...args: Parameters<TableComponentCustomElement['selectRowsByIndex']>): ReturnType<TableComponentCustomElement['selectRowsByIndex']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.selectRowsByIndex(...args));
	}

	/** Deselects a rows by an index or array of indexes. */
	public deselectRowsByIndex(...args: Parameters<TableComponentCustomElement['deselectRowsByIndex']>): ReturnType<TableComponentCustomElement['deselectRowsByIndex']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.deselectRowsByIndex(...args));
	}

	/** Checks if a row is selected or not. */
	public isRowSelected(...args: Parameters<TableComponentCustomElement['isRowSelected']>): ReturnType<TableComponentCustomElement['isRowSelected']> {
		return this.zone.runOutsideAngular(() => this.nativeElement.isRowSelected(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<TableComponentCustomElement>,
		protected zone: NgZone
	) {
		defineTableComponent();
		changeDetectorRef.detach();
	}
}
