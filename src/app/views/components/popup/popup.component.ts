import { Component } from '@angular/core';
import { PopupDirective, PopupService, IPopupOptions, ToastService, PopupRef } from '@tylertech/forge-angular';
import { ExamplePopupComponent } from './example-popup.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  constructor(private _popupService: PopupService, private _toastService: ToastService) { }

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

  private _popupRef?: PopupRef;

  public async showPopupViaService(targetElement: HTMLElement): Promise<void> {
    this._popupRef?.close();

    const popupOptions: IPopupOptions = {
      popupClass: 'test-class',
      targetElement,
      attributes: new Map([
        ['aria-labelledby', 'popup-title'],
        ['aria-describedby', 'popup-desc']
      ]),
      closeCallback: () => {
        console.log('closeCallback');
      }
    };

    const popupConfig = {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to close the modal?'
      }
    };

    this._popupRef = this._popupService.show(
      ExamplePopupComponent,
      popupOptions,
      popupConfig
    );
    console.log('Native Forge popup instance', this._popupRef.nativeElement);
    console.log('[PopupRef] Angular componentInstance', this._popupRef.componentInstance);
    this._popupRef.afterClosed.subscribe(() => {
      this._toastService.show(`Popup closed.`);
      this._popupRef = undefined;
    });
  }
}
