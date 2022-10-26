import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { LazyBottomSheetComponent } from './lazy-bottom-sheet.component';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule } from '@tylertech/forge-angular';

@NgModule({
  declarations: [
    LazyBottomSheetComponent
  ],
  imports: [
    CommonModule,
    ForgeButtonModule
  ]
})
export class LazyBottomSheetModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public resolveComponent(): ComponentFactory<LazyBottomSheetComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LazyBottomSheetComponent);
  }
}
