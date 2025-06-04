import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { ToastService } from '@tylertech/forge-angular';
import { tylIconCode, tylIconFavorite, tylIconFavoriteBorder } from '@tylertech/tyler-icons/standard';

@Component({
    selector: 'app-icon-button',
    styleUrls: ['./icon-button.component.scss'],
    templateUrl: './icon-button.component.html',
    standalone: false
})
export class IconButtonComponent {
  public isToggleOn = false;

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
