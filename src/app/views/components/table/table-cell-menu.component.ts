import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuOption } from '@tylertech/forge';

@Component({
    selector: 'app-table-cell-menu',
    templateUrl: './table-cell-menu.component.html',
    standalone: false
})
export class TableCellMenuComponent {
  @Input()
  public iconName: string;

  @Output()
  public selected = new EventEmitter();

  public options: IMenuOption[] = [
    { label: 'Delete', value: 'delete' },
    { label: 'Edit', value: 'edit' },
    { label: 'Details', value: 'details' }
  ];

  public onMenuOptionSelected(value: any): void {
    this.selected.next(value);
  }
}
