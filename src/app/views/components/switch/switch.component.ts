import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent {
  public withLabel = true;
  public withoutLabel = false;

  public onChange(evt: CustomEvent<boolean>): void {
    console.log(evt.detail);
  }
}
