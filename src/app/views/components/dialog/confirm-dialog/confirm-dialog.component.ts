import { Component } from '@angular/core';
import { DialogConfig, DialogRef } from '@tylertech/forge-angular';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  public title: string;
  public message: string;
  public moveable: boolean;

  constructor(public dialogConfig: DialogConfig, private _dialogRef: DialogRef) {
    this.title = dialogConfig.data.title;
    this.message = dialogConfig.data.message;
    this.moveable = dialogConfig.data.moveable;
  }

  public onCancel(): void {
    this._dialogRef.close(false);
  }

  public onConfirm(): void {
    this._dialogRef.close(true);
  }
}
