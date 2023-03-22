import { ComponentFactory, Injectable, Injector, NgModuleRef, Type } from '@angular/core';
import { BOTTOM_SHEET_CONSTANTS, IBottomSheetComponent, defineBottomSheetComponent } from '@tylertech/forge';
import { DynamicComponentService } from '../core/dynamic-component/dynamic-component.service';
import { BottomSheetConfig } from './bottom-sheet-config';
import { BottomSheetInjector } from './bottom-sheet-injector';
import { BottomSheetRef } from './bottom-sheet-ref';

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
  constructor(private _dcs: DynamicComponentService, private _injector: Injector) {
    defineBottomSheetComponent();
  }

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
    bottomSheetElement.addEventListener(BOTTOM_SHEET_CONSTANTS.events.CLOSE, () => dcRef.destroy());

    // Listen for close via escape/backdrop click if applicable to ensure observables complete.
    const closeRef = () => bottomSheetRef.close();
    if (bottomSheetElement.backdropClose) {
      bottomSheetElement.addEventListener(BOTTOM_SHEET_CONSTANTS.events.CLOSE, closeRef);
    }

    const sub = bottomSheetRef.afterClosed.subscribe(() => {
      bottomSheetElement.removeEventListener(BOTTOM_SHEET_CONSTANTS.events.CLOSE, closeRef);
      bottomSheetElement.open = false;
      sub.unsubscribe();
    });

    // Appends the bottom sheet element to the DOM
    bottomSheetElement.open = true;

    return bottomSheetRef;
  }
}
