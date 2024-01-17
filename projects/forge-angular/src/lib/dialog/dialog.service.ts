import { Injectable, Injector, OnDestroy } from '@angular/core';
import { Type, ComponentFactory, NgModuleRef } from '@angular/core';
import { IDialogComponent, DIALOG_CONSTANTS, defineDialogComponent } from '@tylertech/forge';
import { DialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';
import { DialogInjector } from './dialog-injector';
import { DynamicComponentService } from '../core/dynamic-component/dynamic-component.service';
import { IDynamicComponentRef } from '../core/dynamic-component/dynamic-component.service';
import { Subject, take, takeUntil } from 'rxjs';

export interface IDialogOptions extends Omit<Partial<IDialogComponent>, 'attributes'> {
  dialogClass?: string;
  attributes?: Map<string, string>;
}

/**
 * Provides facilities for working with a Forge dialog and placing dynamic components within it.
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService implements OnDestroy {
  private _dialogRefs: DialogRef[] = [];
  private _unsubscribe$ = new Subject();
  constructor(private _dcs: DynamicComponentService, private _injector: Injector) {
    defineDialogComponent();
  }

  /**
   * Displays a component within a Forge dialog instance.
   * @param component The component reference.
   * @param config The configuration to provide to the dynamic component as an injectable token.
   */
  public show<T, K>(
    component: Type<T>,
    options?: IDialogOptions,
    config?: DialogConfig,
    moduleRef?: NgModuleRef<K>
  ): DialogRef<T> {
    const dialogRef = this._showDialog(component, options, config, moduleRef);
    this._dialogRefs.push(dialogRef);
    dialogRef.afterClosed.pipe(take(1), takeUntil(this._unsubscribe$)).subscribe(() => this._removeDialogRef(dialogRef));
    return dialogRef;
  }

  private _showDialog<T, K>(component: Type<T> | ComponentFactory<T>, options?: IDialogOptions, config?: DialogConfig, moduleRef?: NgModuleRef<K>): DialogRef<T> {
    // Contains tokens that will be provided to components through our custom dialog injector
    const map = new WeakMap();

    // If we got a config, we should provide it as an injection token
    if (config) {
      map.set(DialogConfig, config);
    }

    // Create the Forge dialog element
    const dialogElement = document.createElement('forge-dialog');

    // Configure the dialog with the provided options
    if (options) {
      const { dialogClass, attributes, ...restOptions} = options;
      if (dialogClass) {
        dialogElement.classList.add(dialogClass);
      }
      if (attributes) {
        attributes.forEach((value, key) => dialogElement.setAttribute(key, value));
      }
      Object.assign(dialogElement, restOptions);
    }

    // Create the ref that will allow the consumer to control the dialog
    const dialogRef = new DialogRef<T>(dialogElement);

    // Always provide the dialog ref as an injection token
    map.set(DialogRef, dialogRef);

    // Create and attach the dynamic component to the dialog element
    const dcRef = this._dcs.create(component, dialogElement, new DialogInjector(this._injector, map), moduleRef);
    dialogRef.componentInstance = dcRef.componentRef.instance;

    // Always destroy when the dialog is closed
    const sub = dialogRef.afterClosed.subscribe(() => {
      this._destroy(dialogElement, dcRef);
      sub.unsubscribe();
    });

    // Listen for clicks on the backdrop to destroy the dialog (if applicable)
    if (dialogElement.backdropClose) {
      dialogElement.addEventListener(DIALOG_CONSTANTS.events.CLOSE, () => {
        dialogRef.close();
        this._destroy(dialogElement, dcRef);
        sub.unsubscribe();
      });
    }

    // Appends the dialog element to the DOM
    dialogElement.open = true;

    return dialogRef;
  }

  /**
   * Removes a dialog from the DOM and destroys the component instance.
   * @param dialogInstance An instance of a Forge dialog element.
   * @param ref A reference to the dynamic component.
   */
  private _destroy<T>(dialogInstance: IDialogComponent, ref: IDynamicComponentRef<T>): void {
    dialogInstance.open = false;
    ref.destroy();
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next(null);
    this._unsubscribe$.complete();
  }

  /**
   * Closes all dialogs. Will close up to 2 nested dialogs.
   * @param result The result of closing the dialogs. Default is false.
   */
  public closeAllDialogs(result = false): void {
    this._closeAllDialogs(result);
  }

  private _closeAllDialogs(result: boolean, recursiveExecutionCount = 0): void {
    if (recursiveExecutionCount > 2) {
      throw new Error('Could not close all dialogs. Reason: Too many nested dialogs.');
    }

    this._dialogRefs.forEach((ref) => ref.close(result));
    console.table(this._dialogRefs);

    // This is here to close any dialogs that open as a result of other dialogs closing
    // e.g. A dirty dialog opening when a dirty form dialog closes.
    if (this._dialogRefs.length > 0) {
      this._closeAllDialogs(result, ++recursiveExecutionCount);
    }
  }

  private _removeDialogRef(ref: DialogRef): void {
    const index = this._dialogRefs.findIndex((dlgRef) => ref === dlgRef);
    if (index < 0) {
      return;
    }

    this._dialogRefs.splice(index, 1);
  }
}
