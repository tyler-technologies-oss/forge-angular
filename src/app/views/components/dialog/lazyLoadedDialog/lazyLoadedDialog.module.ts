import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { LazyLoadedDialogComponent } from './lazyLoadedDialog.component';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule } from '@tylertech/forge-angular';

@NgModule({
    declarations: [
        LazyLoadedDialogComponent
    ],
    imports: [
        CommonModule,
        ForgeButtonModule
    ]
})
export class LazyLoadedModule {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public resolveComponent(): ComponentFactory<LazyLoadedDialogComponent> {
        return this.componentFactoryResolver.resolveComponentFactory(LazyLoadedDialogComponent);
    }
}
