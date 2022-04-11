import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoCardComponent } from './components/demo-card/demo-card.component';

@NgModule({
  declarations: [
    DemoCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DemoCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
