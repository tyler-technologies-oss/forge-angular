import { Component, Input, Output, EventEmitter } from '@angular/core';
import { defineIconButtonComponent, defineMenuComponent, IMenuOption } from '@tylertech/forge';

defineMenuComponent();
defineIconButtonComponent();

@Component({
  selector: 'app-table-cell-menu',
  templateUrl: './table-cell-menu.component.html'
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
