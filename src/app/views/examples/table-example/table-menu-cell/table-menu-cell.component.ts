import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IMenuOption } from '@tylertech/forge';

@Component({
    selector: 'app-table-menu-cell',
    templateUrl: './table-menu-cell.component.html',
    standalone: false
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
