import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { ToastService } from '@tylertech/forge-angular';
import { tylIconCode, tylIconFavorite, tylIconFavoriteBorder } from '@tylertech/tyler-icons/standard';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html'
})
export class IconButtonComponent {
  public isToggleOn = true;

  constructor(private _toastService: ToastService) {
    IconRegistry.define([
      tylIconCode,
      tylIconFavorite,
      tylIconFavoriteBorder
    ]);
  }

  public onToggleChanged(evt: CustomEvent): void {
    this._toastService.show(`Toggle changed: ${evt.detail}`);
  }
}
