import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Renderer2, RendererFactory2, Type } from '@angular/core';
import { IToastComponent, TOAST_CONSTANTS } from '@tylertech/forge/esm/toast';
import { ToastConfig } from './toast-config';
import { ToastInjector } from './toast-injector';

export interface IToastConfig extends Partial<IToastComponent> {
  component?: Type<any>;
  actionHandler?: () => void;
}

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

    if (typeof config === 'string') {
      config = {
        message: config
      };
    }

    const { component, actionHandler, ...restConfig } = config;

    if (component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = componentFactory.create(new ToastInjector(this.injector, map));
      this.appRef.attachView(componentRef.hostView);
      const componentElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      toastElement.builder = () => componentElement;
    }

    Object.assign(toastElement, restConfig);
    
    if (config.actionText && typeof config.actionHandler === 'function') {
      this._renderer.listen(toastElement, TOAST_CONSTANTS.events.ACTION, () => (config as IToastConfig).actionHandler!());
    }

    this._renderer.appendChild(document.body, toastElement);

    return toastElement;
  }
}
