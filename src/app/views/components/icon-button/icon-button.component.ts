import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { ToastService, ForgeIconButtonModule, ForgeIconModule, ForgeButtonModule } from '@tylertech/forge-angular';
import { tylIconCode, tylIconFavorite, tylIconFavoriteBorder } from '@tylertech/tyler-icons/standard';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';

@Component({
    selector: 'app-icon-button',
    styleUrls: ['./icon-button.component.scss'],
    templateUrl: './icon-button.component.html',
    imports: [DemoCardComponent, ForgeIconButtonModule, ForgeIconModule, ForgeButtonModule]
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
