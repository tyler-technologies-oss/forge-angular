import { NgModule, ComponentFactoryResolver, ComponentFactory, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyBottomSheetComponent } from './lazy-bottom-sheet.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LazyBottomSheetComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LazyBottomSheetModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public resolveComponent(): ComponentFactory<LazyBottomSheetComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LazyBottomSheetComponent);
  }
}
