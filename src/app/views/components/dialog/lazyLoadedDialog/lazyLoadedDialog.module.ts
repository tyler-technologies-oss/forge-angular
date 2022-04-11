import { NgModule, ComponentFactoryResolver, ComponentFactory, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyLoadedDialogComponent } from './lazyLoadedDialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LazyLoadedDialogComponent
    ],
    imports: [
        CommonModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LazyLoadedModule {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public resolveComponent(): ComponentFactory<LazyLoadedDialogComponent> {
        return this.componentFactoryResolver.resolveComponentFactory(LazyLoadedDialogComponent);
    }
}
