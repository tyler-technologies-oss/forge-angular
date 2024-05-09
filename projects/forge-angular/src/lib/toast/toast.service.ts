import { ApplicationRef, ComponentRef, EmbeddedViewRef, EnvironmentInjector, Injectable, Type, createComponent, createEnvironmentInjector } from '@angular/core';
import { IToastComponent, IToastPresentConfiguration, TOAST_CONSTANTS, ToastComponent, defineToastComponent } from '@tylertech/forge';
import { ToastConfig } from './toast-config';

export interface IToastConfig<T = any> extends Partial<IToastPresentConfiguration> {
  component?: Type<T>;
  message?: string;
  actionHandler?: () => void;
}

export interface IToastRef {
  nativeElement: IToastComponent;
  close: () => Promise<void>;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private _appRef: ApplicationRef, private _injector: EnvironmentInjector) {
    defineToastComponent();
  }

  /**
   * Creates and renders a toast component.
   * @param config The toast configuration.
   */
  public show(configOrMessage: IToastConfig | string, toastConfig?: ToastConfig): IToastRef {
    const { component, message, actionHandler, ...config } = configOrMessage as IToastConfig;

    let toastElement: IToastComponent;
    let environmentInjector: EnvironmentInjector | undefined;
    let componentRef: ComponentRef<any> | undefined;

    const messageText = typeof configOrMessage === 'string' ? configOrMessage : configOrMessage.message;
    if (typeof messageText === 'string') {
      toastElement = ToastComponent.present({ message: messageText, ...config });
    } else if (component) {
      const providers = toastConfig ? [{ provide: ToastConfig, useValue: toastConfig }] : [];
      environmentInjector = createEnvironmentInjector(providers, this._injector);
      componentRef = createComponent(component, { environmentInjector });
      this._appRef.attachView(componentRef.hostView);

      const element = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      toastElement = ToastComponent.present({ element, ...config });

      toastElement.addEventListener(TOAST_CONSTANTS.events.CLOSE, () => {
        environmentInjector?.destroy();
      });
    } else {
      throw new Error('Either a component or a message must be provided.');
    }

    if (toastElement && config.actionText && typeof actionHandler === 'function') {
      toastElement.addEventListener(TOAST_CONSTANTS.events.ACTION, actionHandler);
    }

    return {
      nativeElement: toastElement,
      close: async () => {
        environmentInjector?.destroy();
        componentRef?.destroy();
        await toastElement.hide();
        toastElement.remove();
      }
    };
  }
}
