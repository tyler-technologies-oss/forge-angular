import { CommonModule } from '@angular/common';
import { ComponentFactory, ComponentFactoryResolver, NgModule, inject } from '@angular/core';
import { ForgeButtonModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { LazyLoadedDialogComponent } from './lazyLoadedDialog.component';

@NgModule({
    imports: [
        CommonModule,
        ForgeButtonModule,
        ForgeScaffoldModule,
        ForgeToolbarModule,
        LazyLoadedDialogComponent
    ]
})
export class LazyLoadedModule {
  private componentFactoryResolver = inject(ComponentFactoryResolver);

  public resolveComponent(): ComponentFactory<LazyLoadedDialogComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LazyLoadedDialogComponent);
  }
}
