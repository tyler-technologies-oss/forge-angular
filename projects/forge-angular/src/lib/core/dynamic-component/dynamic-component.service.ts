import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ViewContainerRef } from '@angular/core';
import { Type, EmbeddedViewRef, NgModuleRef, ComponentRef, ComponentFactory } from '@angular/core';

export interface IDynamicComponentRef<T> {
  instance: T;
  componentRef: ComponentRef<T>;
  componentElement?: HTMLElement;
  destroy(): void;
}

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  constructor(private _cfr: ComponentFactoryResolver, private _injector: Injector, private _appRef: ApplicationRef) {}

  /**
   * Creates an Angular component dynamically, and optionally attaches the component instance to a given element.
   * @param component The component to create.
   * @param target Optional target element to attach the component element to.
   * @param moduleRef Optional module to create the component factory from.
   */
  public create<T, K>(component: Type<T> | ComponentFactory<T>, target?: ViewContainerRef | HTMLElement, injector?: Injector, moduleRef?: NgModuleRef<K>): IDynamicComponentRef<T> {
    const cfr = moduleRef ? moduleRef.componentFactoryResolver : this._cfr;
    const componentFactory = this._isComponentFactory(component) ? component : cfr.resolveComponentFactory(component);
    injector = injector || this._injector;
    
    if (target instanceof ViewContainerRef) {
      const ref = target.createComponent(componentFactory, undefined, injector);
      return {
        instance: ref.instance,
        componentRef: ref,
        destroy: () => {
          target.detach();
          componentRef.destroy();
        }
      };
    }

    const componentRef = componentFactory.create(injector);
    this._appRef.attachView(componentRef.hostView);
    const componentElement = (<EmbeddedViewRef<any>>componentRef.hostView).rootNodes[0] as HTMLElement;
    
    if (target) {
      target.appendChild(componentElement);
    }

    return {
      instance: componentRef.instance,
      componentRef,
      componentElement,
      destroy: () => {
        this._appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      }
    };
  }

  private _isComponentFactory<T>(component: Type<T> | ComponentFactory<T>): component is ComponentFactory<T> {
    return (component as ComponentFactory<T>).create !== undefined;
  }
}
