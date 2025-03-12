import { Component, Compiler, Injector } from '@angular/core';
import { DialogService, ToastService, IDialogOptions } from '@tylertech/forge-angular';
import { take, takeUntil } from 'rxjs/operators';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  public nonmodal = false;
  public persistent = false;
  public fullscreen = false;
  public moveable = false;
  public lazyload = false;
  public dialogClass = '';
  public preventClose = false;

  constructor(
    private _dialogService: DialogService,
    private _toastService: ToastService,
    private _compiler: Compiler,
    private _injector: Injector) {
  }

  public async showConfirmDialog(): Promise<void> {
    const options: IDialogOptions = {
      mode: this.nonmodal ? 'nonmodal' : 'modal',
      persistent: this.persistent,
      fullscreen: this.fullscreen,
      dialogClass: this.dialogClass,
      moveable: this.moveable,
      label: 'Confirm Dialog',
      description: 'This is a confirm dialog'
    };

    const data = {
      title: 'Confirm',
      message: 'Are you sure you want to close the modal?'
    };

    if (!this.lazyload) {
      const dialogRef = this._dialogService.open(ConfirmDialogComponent, { options, data });
      console.log('Native Forge dialog instance', dialogRef.nativeElement);
      console.log('[DialogRef] Angular componentRef', dialogRef.componentRef);
      console.log('[DialogRef] Angular componentInstance', dialogRef.componentInstance);
      dialogRef.afterClosed.pipe(take(1)).subscribe(result => {
        this._toastService.show(`Dialog closed with result: ${result}`);
      });
      if (this.preventClose) {
        dialogRef.beforeClose.pipe(takeUntil(dialogRef.afterClosed)).subscribe(evt => {
          console.log('[beforeClose] preventDefault');
          evt.preventDefault();
        });
      }
    } else {
      // lazyload
      const { LazyLoadedModule } = await import('./lazyLoadedDialog/lazyLoadedDialog.module');
      const moduleFactory = await this._compiler.compileModuleAsync(LazyLoadedModule);
      const moduleRef = moduleFactory.create(this._injector);
      const componentFactory = moduleRef.instance.resolveComponent();
      const dialogRef = this._dialogService.open(componentFactory.componentType, { options, config: { data }});
      console.log('Native Forge dialog instance', dialogRef.nativeElement);
      console.log('[DialogRef] Angular componentInstance', dialogRef.componentInstance);
      dialogRef.afterClosed.pipe(take(1)).subscribe(result => {
        this._toastService.show(`Dialog closed with result: ${result}`);
      });
      if (this.preventClose) {
        dialogRef.beforeClose.pipe(takeUntil(dialogRef.afterClosed)).subscribe(evt => {
          console.log('[beforeClose] preventDefault');
          evt.preventDefault();
        });
      }
    }
  }
}
