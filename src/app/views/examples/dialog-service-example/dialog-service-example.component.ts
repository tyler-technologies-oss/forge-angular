import { Component } from '@angular/core';
import { DialogService, IDialogOptions, ToastService } from '@tylertech/forge-angular';
import { DialogComponent } from './dialog/dialog.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-dialog-service-example',
  templateUrl: './dialog-service-example.component.html',
  styleUrls: ['./dialog-service-example.component.scss']
})
export class DialogServiceExampleComponent {
  public counter = 3;
  public result = false;


  constructor(
    private _dialogService: DialogService,
    private _toastService: ToastService
    ) {}

  public async showDialog(): Promise<void> {
    let localCounter = this.counter;

    const dialogOptions: IDialogOptions = {
      backdropClose: false,
      escapeClose: false,
      attributes: new Map([
        ['aria-labelledby', 'dialog-title'],
        ['aria-describedby', 'dialog-desc']
      ]),
      closeCallback: () => console.log('closeCallback')
    };

    const dialogConfig = {
      data: {
        counter: 3
      }
    };

    const dialogRef = this._dialogService.show(
      DialogComponent,
      dialogOptions,
      dialogConfig
    );
    console.log('Native Forge dialog instance', dialogRef.nativeElement);
    console.log('[DialogRef] Angular componentInstance', dialogRef.componentInstance);

    dialogRef.afterClosed.pipe(take(1)).subscribe(result => {
      this._toastService.show(`Dialog closed with result: ${result}`);
    });

    const interval = setInterval(() => {
      localCounter--;
      if (localCounter < 0) {
        clearInterval(interval);
        console.log('closing all dialog');
        this._dialogService.closeAllDialogs(this.result);
      }
    }, 1000);

  }
}
