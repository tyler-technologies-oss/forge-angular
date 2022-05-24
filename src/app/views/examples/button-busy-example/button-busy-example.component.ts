import { Component } from '@angular/core';

@Component({
  selector: 'app-button-busy-example',
  templateUrl: './button-busy-example.component.html',
  styleUrls: ['./button-busy-example.component.scss']
})

export class ButtonBusyExampleComponent {
  public busy = false;
  public iconBusy = false;
  public cancelBusy = false;
  public confirmBusy = false;
  public fixedWidth = true;

  public onClick(): void {
    this.busy = true;
    window.setTimeout(() => this.busy = false, 3000);
  }

  public onIconClick(): void {
    this.iconBusy = true;
    window.setTimeout(() => this.iconBusy = false, 3000);
  }

  public onCancelClick(): void {
    this.cancelBusy = true;
    window.setTimeout(() => this.cancelBusy = false, 3000);
  }

  public onConfirmClick(): void {
    this.confirmBusy = true;
    window.setTimeout(() => this.confirmBusy = false, 3000);
  }
}
