import { Component } from '@angular/core';
import { PopupDirective } from '@tylertech/forge-angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  public popupTextValue = 'Popup text field';

  public popupOpen(popupDirective: PopupDirective) {
    console.log('popup wants to open');
    popupDirective.open();
  }

  public popupOpened() {
    console.log('popup opened.');
  }

  public popupClosed() {
    console.log('popup closed.')
  }
}
