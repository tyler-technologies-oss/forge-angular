import { Component, Renderer2 } from '@angular/core';
import { randomChars } from '@tylertech/forge-core';
import { first } from 'rxjs/operators';

import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';
import { SimpleDialogConfig, SimpleDialogError } from './simple-dialog-constants';

@Component({
  selector: 'forge-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})

export class ForgeSimpleDialogComponent {
  public config: SimpleDialogConfig;
  public isConfirming = false;
  public isCanceling = false;

  constructor(private _dialogConfig: DialogConfig<SimpleDialogConfig>, private _dialogRef: DialogRef, private _renderer: Renderer2) {
    this._setConfig(_dialogConfig?.data);
    this._setBeforeCloseCallback();
    this._setAriaAttributes();
  }

  public onDismiss(): void {
    this._dialogRef.close(this.config.dismissReturnValue ?? null);
  }

  public onCancel(): void {
    if (this.config.cancelButtonConfig?.handler) {
      this.isCanceling = true;
      this.config.cancelButtonConfig.handler.pipe(first()).subscribe({
        next: result => this._dialogRef.close(result),
        error: error => {
          this.isCanceling = false;
          this._handleError(error);
        }
    });
    } else {
      this._dialogRef.close(this.config.cancelButtonConfig?.returnValue ?? true);
    }
  }

  public onConfirm(): void {
    if (this.config.confirmButtonConfig?.handler) {
      this.isConfirming = true;
      this.config.confirmButtonConfig.handler.pipe(first()).subscribe({
        next: result => this._dialogRef.close(result),
        error: error => {
          this.isConfirming = false;
          this._handleError(error);
        }
    });
    } else {
      this._dialogRef.close(this.config.confirmButtonConfig?.returnValue ?? true);
    }
  }

  private _setConfig(config?: SimpleDialogConfig): void {
    this.config = {
      title: config?.title ?? 'Alert',
      message: config?.message ?? '',
      confirmButtonConfig: config?.confirmButtonConfig ?? { label: 'Done' },
      cancelButtonConfig: config?.cancelButtonConfig,
      toolbarBorders: config?.toolbarBorders ?? false,
      preventDismiss: config?.preventDismiss ?? false,
      dismissReturnValue: config?.dismissReturnValue ?? null,
      focus: config?.focus ?? 'auto',
      errorMode: config?.errorMode ?? 'close',
      alert: config?.alert ?? false,
      id: config?.id ?? `forge-simple-dialog-${randomChars(7)}`
    }
  }

  private _handleError(error: any): void {
    switch (this.config.errorMode) {
      case 'close':
        this._dialogRef.close({ error } as SimpleDialogError);
        break;
      default:
        break;
    }
  }

  private _setBeforeCloseCallback(): void {
    // Intercept a close on escape or backdrop click
    this._dialogRef.nativeElement.beforeCloseCallback = () => {
      if (this.isConfirming || this.isCanceling) {
        // Stop all attempts to close while the dialog is busy
        return false;
      }
      if (!this.config.preventDismiss) {
        // If dismissing is allowed, close
        this.onDismiss();
      } else if (this.config.cancelButtonConfig) {
        // If dismissing isn't allowed but canceling is (e.g. an explicit response is desired), close
        this.onCancel();
      }
      // Otherwise keep the dialog open - an explicit confirmation is needed
      return false;
    };
  }

  private _setAriaAttributes(): void {
    if (this.config.alert) {
      this._renderer.setAttribute(this._dialogRef.nativeElement, 'role', 'alertdialog');
    }
    this._renderer.setAttribute(this._dialogRef.nativeElement, 'aria-labelledby', `${this.config.id}-title`)
    this._renderer.setAttribute(this._dialogRef.nativeElement, 'aria-describedby', `${this.config.id}-message`)
  }
}
