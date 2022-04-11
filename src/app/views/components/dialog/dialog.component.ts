import { Component, Compiler, Injector } from '@angular/core';
import { DialogService, ToastService, IDialogOptions } from '@tylertech/forge-angular';
import { take, takeUntil } from 'rxjs/operators';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  public backdropClose = true;
  public escapeClose = false;
  public fullscreen = false;
  public moveable = false;
  public lazyload = false;
  public dialogClass = '';
  public beforeCloseCallback = false;
  public beforeCloseSubscription = false;

  constructor(
    private _dialogService: DialogService,
    private _toastService: ToastService,
    private _compiler: Compiler,
    private _injector: Injector) {
  }

  public async showConfirmDialog(): Promise<void> {

    const dialogOptions = <IDialogOptions>{
      backdropClose: this.backdropClose,
      escapeClose: this.escapeClose,
      fullscreen: this.fullscreen,
      dialogClass: this.dialogClass,
      moveable: this.moveable,
      attributes: new Map([
        ['aria-labelledby', 'dialog-title'],
        ['aria-describedby', 'dialog-desc']
      ]),
      beforeCloseCallback: () => {
        console.log('[beforeCloseCallback]');
        return !this.beforeCloseCallback;
      }
    };

    const dialogConfig = {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to close the modal?',
        moveable: this.moveable
      }
    };

    if (!this.lazyload) {
      const dialogRef = this._dialogService.show(
        ConfirmDialogComponent,
        dialogOptions,
        dialogConfig
      );
      console.log('Native Forge dialog instance', dialogRef.nativeElement);
      console.log('[DialogRef] Angular componentInstance', dialogRef.componentInstance);
      dialogRef.afterClosed.pipe(take(1)).subscribe(result => {
        this._toastService.show(`Dialog closed with result: ${result}`);
      });
      if (this.beforeCloseSubscription) {
        dialogRef.beforeClose.pipe(takeUntil(dialogRef.afterClosed)).subscribe(evt => {
          console.log('[beforeClosed subscription] preventDefault');
          evt.preventDefault();
        });
      }
    } else {
      // lazyload
      const { LazyLoadedModule } = await import('./lazyLoadedDialog/lazyLoadedDialog.module');
      const moduleFactory = await this._compiler.compileModuleAsync(LazyLoadedModule);
      const moduleRef = moduleFactory.create(this._injector);
      const componentFactory = moduleRef.instance.resolveComponent();
      const dialogRef = this._dialogService.show(componentFactory, dialogOptions, dialogConfig);
      console.log('Native Forge dialog instance', dialogRef.nativeElement);
      console.log('[DialogRef] Angular componentInstance', dialogRef.componentInstance);
      dialogRef.afterClosed.pipe(take(1)).subscribe(result => {
        this._toastService.show(`Dialog closed with result: ${result}`);
      });
      if (this.beforeCloseSubscription) {
        dialogRef.beforeClose.pipe(takeUntil(dialogRef.afterClosed)).subscribe(evt =>{
          console.log('[beforeClosed subscription] preventDefault');
          evt.preventDefault();
        });
      }
    }
  }
}
