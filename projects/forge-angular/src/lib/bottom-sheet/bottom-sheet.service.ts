import { Injectable, Injector } from '@angular/core';
import { Type, ComponentFactory, NgModuleRef } from '@angular/core';
import { BOTTOM_SHEET_CONSTANTS, IBottomSheetComponent } from '@tylertech/forge';
import { BottomSheetConfig } from './bottom-sheet-config';
import { BottomSheetRef } from './bottom-sheet-ref';
import { BottomSheetInjector } from './bottom-sheet-injector';
import { DynamicComponentService } from '../core/dynamic-component/dynamic-component.service';
import { IDynamicComponentRef } from '../core/dynamic-component/dynamic-component.service';

export interface IBottomSheetOptions extends Omit<Partial<IBottomSheetComponent>, 'attributes'> {
  bottomSheetClass?: string;
  attributes?: Map<string, string>;
}

/**
 * Provides facilities for working with a Forge bottom sheet and placing dynamic components within it.
 */
@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {
  constructor(private _dcs: DynamicComponentService, private _injector: Injector) {}

  /**
   * Displays a components within a Forge bottom sheet instance.
   * @param component The component reference.
   * @param options The component reference.
   * @param config The configuration to provide to the dynamic component as an injectable token.
   * @param moduleRef An NgModuleRef to create the component factory from. (should the injector also inherit from this?)
   * @returns A reference for interacting with the created bottom sheet.
   */
  public show<T, K>(component: Type<T> | ComponentFactory<T>, options?: IBottomSheetOptions, config?: BottomSheetConfig, moduleRef?: NgModuleRef<K>): BottomSheetRef<T> {
    // Contains tokens that will be provided to components through our custom bottom sheet injector
    const map = new WeakMap();

    // If we got a config, we should provide it as an injection token
    if (config) {
      map.set(BottomSheetConfig, config);
    }

    // Create the Forge bottom sheet element
    const bottomSheetElement = document.createElement('forge-bottom-sheet');

    // Configure the bottom sheet with the provided options
    if (options) {
      const { bottomSheetClass, attributes, ...restOptions} = options;
      if (bottomSheetClass) {
        bottomSheetElement.classList.add(bottomSheetClass);
      }
      if (attributes) {
        attributes.forEach((value, key) => bottomSheetElement.setAttribute(key, value));
      }
      Object.assign(bottomSheetElement, restOptions);
    }

    // Create the ref that will allow the consumer to control the bottom sheet
    const bottomSheetRef = new BottomSheetRef<T>(bottomSheetElement);

    // Always provide the bottom sheet ref as an injection token
    map.set(BottomSheetRef, bottomSheetRef);

    // Create and attach the dynamic component to the bottom sheet element
    const dcRef = this._dcs.create(component, bottomSheetElement, new BottomSheetInjector(this._injector, map), moduleRef);
    bottomSheetRef.componentInstance = dcRef.componentRef.instance;

    // Always destroy when the bottom sheet is closed
    const sub = bottomSheetRef.afterClosed.subscribe(() => {
      // Wait for close animation (and related cleanup)
      bottomSheetElement.addEventListener(BOTTOM_SHEET_CONSTANTS.events['CLOSE'], () => {
        this._destroy(bottomSheetElement, dcRef);
        sub.unsubscribe();
      });
    });

    // Listen for clicks on the backdrop to destroy the bottom sheet (if applicable)
    if (bottomSheetElement.backdropClose) {
      bottomSheetElement.addEventListener(BOTTOM_SHEET_CONSTANTS.events['CLOSE'], () => {
        bottomSheetRef.close();
        this._destroy(bottomSheetElement, dcRef);
        sub.unsubscribe();
      });
    }

    // Appends the bottom sheet element to the DOM
    bottomSheetElement.open = true;

    return bottomSheetRef;
  }

  /**
   * Removes a bottom sheet from the DOM and destroys the component instance.
   * @param bottomSheetInstance An instance of a Forge bottom sheet.
   * @param ref A reference to the dynamic component.
   */
  private _destroy<T>(bottomSheetInstance: IBottomSheetComponent, ref: IDynamicComponentRef<T>): void {
    bottomSheetInstance.open = false;
    ref.destroy();
  }
}
