import { Component } from '@angular/core';
import { DialogConfig, DialogRef } from '@tylertech/forge-angular';

@Component({
    selector: 'lazy-loaded-dialog',
    templateUrl: './lazyLoadedDialog.component.html',
    styleUrls: ['./lazyLoadedDialog.component.scss'],
    standalone: false
})
export class LazyLoadedDialogComponent {
  public title: string;
  public message: string;

  constructor(public dialogConfig: DialogConfig<{ title: string; message: string }>, private _dialogRef: DialogRef) {
    this.title = dialogConfig.data.title;
    this.message = dialogConfig.data.message;
  }

  public onCancel(): void {
    this._dialogRef.close(false);
  }

  public onConfirm(): void {
    this._dialogRef.close(true);
  }
}
