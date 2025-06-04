import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IMenuOption } from '@tylertech/forge';
import { ForgeMenuModule, ForgeIconButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

@Component({
    selector: 'app-table-menu-cell',
    templateUrl: './table-menu-cell.component.html',
    imports: [ForgeMenuModule, ForgeIconButtonModule, ForgeIconModule]
})
export class TableMenuCellComponent {
  @Input()
  public options: IMenuOption[] = [];

  @Output()
  public selected = new EventEmitter();

  public onMenuOptionSelected(value: any): void {
    this.selected.next(value);
  }
}
