import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@tylertech/forge-angular';

export interface IConfirmDialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  public title: string;
  public message: string;

  constructor(@Inject(DIALOG_DATA) public data: IConfirmDialogData, private _dialogRef: DialogRef) {
    this.title = data.title;
    this.message = data.message;
  }

  public onCancel(): void {
    this._dialogRef.close(false);
  }

  public onConfirm(): void {
    this._dialogRef.close(true);
  }
}
