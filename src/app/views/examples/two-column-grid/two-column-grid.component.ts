import { Component } from '@angular/core';
import { IMenuOption, IMenuSelectEventData, IconRegistry } from '@tylertech/forge';
import { tylIconArrowBack, tylIconDelete, tylIconInfoOutline, tylIconMoreVert } from '@tylertech/tyler-icons/standard';

@Component({
    selector: 'app-two-column-grid',
    templateUrl: './two-column-grid.component.html',
    styleUrls: ['./two-column-grid.component.scss'],
    standalone: false
})
export class TwoColumnGridComponent {
  public lastSelectedValue: string;
  public options: IMenuOption[] = [
    { label: 'Option 1', value: 'option 1' },
    { label: 'Option 2', value: 'option 2' },
    { label: 'Option 3', value: 'option 3' }
  ];

  constructor() {
    IconRegistry.define([
      tylIconArrowBack,
      tylIconDelete,
      tylIconInfoOutline,
      tylIconMoreVert
    ]);
  }

  public onMenuOptionSelected(evt: CustomEvent): void {
    const data = evt.detail as IMenuSelectEventData;
    console.log('[menu] option selected', data);
  }

}
