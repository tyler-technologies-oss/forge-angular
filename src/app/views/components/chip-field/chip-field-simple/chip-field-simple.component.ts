import { Component } from '@angular/core';

@Component({
  selector: 'app-chip-field-simple',
  templateUrl: './chip-field-simple.component.html',
  styleUrls: ['./chip-field-simple.component.scss']
})
export class ChipFieldSimpleComponent {

  public members: string[] = [
    'test 1',
    'test 2'
  ];

  public addMember(event$: CustomEvent) {
    const value = event$.detail;
    this.members.push(value);
  }

  public deleteMember(event$: CustomEvent) {
    const chipVal = event$.detail.value;
    const index = this.members.findIndex(x => x === chipVal);
    if (index === -1) {
      return;
    }

    this.members.splice(index, 1);
  }
}
