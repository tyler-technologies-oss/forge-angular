import { Component } from '@angular/core';
import { PopoverDirective, PopoverService, IPopoverOptions, ToastService, PopoverRef } from '@tylertech/forge-angular';
import { ExamplePopupComponent } from './example-popup.component';

@Component({
  selector: 'app-popover',
  styleUrls: ['./popover.component.scss'],
  templateUrl: './popover.component.html'
})
export class PopoverComponent {
  constructor(private _popupService: PopoverService, private _toastService: ToastService) { }

  public popupTextValue = 'Popup text field';

  public popupOpen(popupDirective: PopoverDirective): void {
    console.log('popup wants to open');
    popupDirective.open();
  }

  public popupOpened(): void {
    console.log('popup opened.');
  }

  public popupClosed(): void {
    console.log('popup closed.');
  }

  private _popupRef?: PopoverRef;

  public async showPopupViaService(anchorElement: HTMLElement): Promise<void> {
    this._popupRef?.close();

    const popupOptions: IPopoverOptions = {
      className: 'test-class',
      anchorElement,
      attributes: new Map([
        ['aria-labelledby', 'popup-title'],
        ['aria-describedby', 'popup-desc']
      ])
      // closeCallback: () => {
      //   console.log('closeCallback');
      // }
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
