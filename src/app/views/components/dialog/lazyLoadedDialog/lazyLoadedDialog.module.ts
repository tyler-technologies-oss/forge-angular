import { CommonModule } from '@angular/common';
import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { ForgeButtonModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { LazyLoadedDialogComponent } from './lazyLoadedDialog.component';

@NgModule({
  declarations: [
    LazyLoadedDialogComponent
  ],
  imports: [
    CommonModule,
    ForgeButtonModule,
    ForgeScaffoldModule,
    ForgeToolbarModule
  ]
})
export class LazyLoadedModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveComponent(): ComponentFactory<LazyLoadedDialogComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LazyLoadedDialogComponent);
  }
}
