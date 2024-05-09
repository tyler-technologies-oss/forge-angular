import { Component } from '@angular/core';
import { DialogService, IDialogOptions, ToastService } from '@tylertech/forge-angular';
import { DialogComponent } from './dialog/dialog.component';
import { take } from 'rxjs';
import { CountDownDialogComponent } from './count-down-dialog/count-down-dialog.component';

@Component({
  selector: 'app-dialog-service-example',
  templateUrl: './dialog-service-example.component.html',
  styleUrls: ['./dialog-service-example.component.scss']
})
export class DialogServiceExampleComponent {
  public result = false;


  constructor(private _dialogService: DialogService, private _toastService: ToastService) {}

  public async showDialog(): Promise<void> {
    this._dialogService.show(DialogComponent);

    setTimeout(() => {
      this._openCountDownDialog();
    }, 2000);
  }

  private _openCountDownDialog(): void {
    const dialogOptions: IDialogOptions = {
      persistent: false,
      attributes: new Map([
        ['aria-labelledby', 'dialog-title'],
        ['aria-describedby', 'dialog-desc']
      ])
    };
    
    const dialogConfig = {
      data: {
        counter: 5
      }
    };
    
    const countDownDialogRef = this._dialogService.show(
      CountDownDialogComponent,
      dialogOptions,
      dialogConfig
      );
    console.log('Native Forge dialog instance', countDownDialogRef.nativeElement);
    console.log('[DialogRef] Angular componentInstance', countDownDialogRef.componentInstance);

    countDownDialogRef.afterClosed.pipe(take(1)).subscribe(result => {
      this._toastService.show(`Dialog closed with result: ${result}`);
    });
    
    let localCounter = 5;
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

