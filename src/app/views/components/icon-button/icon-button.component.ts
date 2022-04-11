import { Component } from '@angular/core';
import { ToastService } from '@tylertech/forge-angular';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html'
})
export class IconButtonComponent {
  public isToggleOn = true;

  constructor(private _toastService: ToastService) {}

  public onToggleChanged(evt: CustomEvent): void {
    this._toastService.show(`Toggle changed: ${evt.detail}`);
  }
}
