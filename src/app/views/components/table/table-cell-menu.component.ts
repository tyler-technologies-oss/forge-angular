import { Component, EventEmitter, Output, input } from '@angular/core';
import { IMenuOption } from '@tylertech/forge';
import { ForgeMenuModule, ForgeIconButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

@Component({
    selector: 'app-table-cell-menu',
    templateUrl: './table-cell-menu.component.html',
    imports: [ForgeMenuModule, ForgeIconButtonModule, ForgeIconModule]
})
export class TableCellMenuComponent {
  public readonly iconName = input<string>();

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
