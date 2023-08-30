import { Injectable, Injector, NgModuleRef, Type } from '@angular/core';
import { IPopupComponent, POPUP_CONSTANTS, definePopupComponent } from '@tylertech/forge';
import { DynamicComponentService, IDynamicComponentRef } from '../core/dynamic-component/dynamic-component.service';
import { PopupConfig } from './popup-config';
import { PopupInjector } from './popup-injector';
import { PopupRef } from './popup-ref';

export interface IPopupOptions extends Omit<Partial<IPopupComponent>, 'attributes'> {
  popupClass?: string;
  attributes?: Map<string, string>;
  targetElement: HTMLElement;
}

/**
 * Provides facilities for working with a Forge popup and placing dynamic components within it.
 */
@Injectable({
  providedIn: 'root'
})
export class PopupService {
  constructor(private _dcs: DynamicComponentService, private _injector: Injector) {
    definePopupComponent();
  }

  /**
   * Displays a components within a Forge popup instance.
   * @param component The component reference.
   * @param options Sets attributes and properties on the `forge-popup` element. `targetElement` is required.
   * @param config The configuration to provide to the dynamic component as an injectable token.
   * @param moduleRef Optional NgModule ref if need by the component.
   * @returns A PopupRef to the forge-popup and dynamically created component, and related close handling.
   */
  public show<T, TModule>(
    component: Type<T>,
    options: IPopupOptions,
    config?: PopupConfig,
    moduleRef?: NgModuleRef<TModule>
  ): PopupRef<T> {
    // Contains tokens that will be provided to components through our custom popup injector
    const map = new WeakMap();

    // If we got a config, we should provide it as an injection token
    if (config) {
      map.set(PopupConfig, config);
    }

    // Create the Forge popup element
    const popupElement = document.createElement('forge-popup');

    // Configure the popup with the provided options
    const { popupClass, attributes, ...restOptions } = options;
    if (popupClass) {
      popupElement.classList.add(popupClass);
    }
    if (attributes) {
      attributes.forEach((value, key) => popupElement.setAttribute(key, value));
    }
    Object.assign(popupElement, restOptions);

    // Create the ref that will allow the consumer to control the popup
    const popupRef = new PopupRef<T>(popupElement);

    // Always provide the popup ref as an injection token
    map.set(PopupRef, popupRef);

    // Create and attach the dynamic component to the popup element
    const dcRef = this._dcs.create(component, popupElement, new PopupInjector(this._injector, map), moduleRef);
    popupRef.componentInstance = dcRef.componentRef.instance;

    // Always destroy when the popup is closed
    const sub = popupRef.afterClosed.subscribe(() => {
      this._destroy(popupElement, dcRef);
      sub.unsubscribe();
    });

    popupElement.addEventListener(POPUP_CONSTANTS.events.CLOSE, () => {
      popupRef.close();
      this._destroy(popupElement, dcRef);
      sub.unsubscribe();
    });

    // Appends the popup element to the DOM
    popupElement.open = true;

    return popupRef;
  }

  /**
   * Removes a popup from the DOM and destroys the component instance.
   * @param popupInstance An instance of a Forge popup element.
   * @param ref A reference to the dynamic component.
   */
  private _destroy<T>(popupInstance: IPopupComponent, ref: IDynamicComponentRef<T>): void {
    popupInstance.open = false;
    ref.destroy();
  }
}
