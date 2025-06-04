import { Component } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent {
  public items = [
    {
      label: 'List Item One',
      value: 1
    },
    {
      label: 'List Item Two',
      value: 2
    },
    {
      label: 'List Item Three',
      value: 3
    },
    {
      label: 'List Item Four',
      value: 4
    }
  ];
}
