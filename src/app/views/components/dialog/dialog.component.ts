import { Component, Compiler, Injector } from '@angular/core';
import { DialogService, ToastService, IDialogOptions, SimpleDialogConfig, SimpleDialogFocus, SimpleDialogErrorMode } from '@tylertech/forge-angular';
import { of } from 'rxjs';
import { delay, take, takeUntil, tap } from 'rxjs/operators';

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

  public title = 'Simple dialog';
  public message = 'This is a simple dialog.';
  public confirmButtonLabel = 'OK';
  public confirmButtonHandler = false;
  public cancelButton = true;
  public cancelButtonLabel = 'Cancel';
  public cancelButtonHandler = false;
  public toolbarBorders = false;
  public preventDismiss = false;
  public dismissReturnValue: null | string = null;
  public focus: SimpleDialogFocus = 'auto';
  public errorMode: SimpleDialogErrorMode = 'close';
  public alert = false;
  public id: null | string = null;

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

  public showSimpleDialog(): void {
    const config: SimpleDialogConfig = {
      title: this.title,
      message: this.message,
      confirmButtonConfig: {
        label: this.confirmButtonLabel,
        handler: this.confirmButtonHandler
          ? of(true).pipe(
            tap(() => console.log('Confirm button clicked, waiting one second...')),
            delay(1000)
          )
          : undefined
      },
      cancelButtonConfig: this.cancelButton ? {
        label: this.cancelButtonLabel,
        handler: this.cancelButtonHandler
          ? of(false).pipe(
            tap(() => console.log('Cancel button clicked, waiting one second...')),
            delay(1000)
          )
          : undefined
      } : undefined,
      toolbarBorders: this.toolbarBorders,
      dismissReturnValue: this.dismissReturnValue || null,
      preventDismiss: this.preventDismiss,
      focus: this.focus,
      errorMode: this.errorMode,
      alert: this.alert,
      id: this.id ?? undefined
    }
    this._dialogService.showSimple(config).then(result => console.log(result));
  }
}
