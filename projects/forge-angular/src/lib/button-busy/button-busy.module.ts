import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCircularProgressComponent } from '@tylertech/forge';


import { ButtonBusyComponent } from './button-busy.component';

@NgModule({
  declarations: [ButtonBusyComponent],
  imports: [CommonModule],
  exports: [ButtonBusyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ForgeButtonBusyModule {
  public constructor() {
    defineCircularProgressComponent();
  }
}
