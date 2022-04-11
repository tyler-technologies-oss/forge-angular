import { Injectable, RendererFactory2, Renderer2, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { Type, EmbeddedViewRef } from '@angular/core';
import { IToastComponent, ToastPlacement, TOAST_CONSTANTS } from '@tylertech/forge';
import { ToastConfig } from './toast-config';
import { ToastInjector } from './toast-injector';

export interface IToastConfig {
  message?: string;
  component?: Type<any>;
  actionText?: string;
  actionHandler?: () => void;
  placement?: ToastPlacement;
  duration?: number;
  showClose?: boolean;
}

// The default toast lifetime
const DEFAULT_TOAST_DURATION = TOAST_CONSTANTS.defaults.DURATION;

/**
 * Provides facilities for managing toast notifications.
 */
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _renderer: Renderer2;

  constructor(private _rendererFactory: RendererFactory2, private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {
    this._renderer = this._rendererFactory.createRenderer(null, null);
  }

  /**
   * Creates and renders a toast component.
   * @param config The toast configuration.
   */
  public show(config: IToastConfig | string, toastConfig?: ToastConfig): IToastComponent {
    const toastElement = this._renderer.createElement('forge-toast');

    const map = new WeakMap();

    if (toastConfig) {
      map.set(ToastConfig, toastConfig);
    }

    // If the config is a string, then we were just passed a message to display so
    // use the default configuration values
    if (typeof config === 'string') {
      config = {
        message: config
      };
    }

    if (config.component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(config.component);
      const componentRef = componentFactory.create(new ToastInjector(this.injector, map));
      this.appRef.attachView(componentRef.hostView);
      const componentElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      toastElement.builder = () => componentElement;
    } else if (config.message) {
      toastElement.message = config.message;
    }
    
    toastElement.duration = config.duration || DEFAULT_TOAST_DURATION;
    
    if (config.placement) {
      toastElement.placement = config.placement;
    }

    if (config.showClose != null) {
      toastElement.showClose = config.showClose;
    }

    if (config.actionText) {
      toastElement.actionText = config.actionText;

      if (typeof config.actionHandler === 'function') {
        this._renderer.listen(toastElement, TOAST_CONSTANTS.events.ACTION, () => (config as IToastConfig).actionHandler!());
      }
    }

    this._renderer.appendChild(document.body, toastElement);

    return toastElement;
  }
}
