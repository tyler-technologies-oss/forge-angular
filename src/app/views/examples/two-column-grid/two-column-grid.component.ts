import { Component } from '@angular/core';
import { IMenuOption, IMenuSelectEventData } from '@tylertech/forge';


@Component({
  selector: 'app-two-column-grid',
  templateUrl: './two-column-grid.component.html',
  styleUrls: ['./two-column-grid.component.scss']
})
export class TwoColumnGridComponent {

  public lastSelectedValue: string;
  public options: IMenuOption[] = [
    { label: 'Option 1', value: 'option 1' },
    { label: 'Option 2', value: 'option 2' },
    { label: 'Option 3', value: 'option 3' },
  ];

  public onMenuOptionSelected(evt: CustomEvent): void {
    const data = evt.detail as IMenuSelectEventData;
    console.log('[menu] option selected', data);
  }

}
