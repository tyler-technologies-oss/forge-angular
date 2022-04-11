import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineAccordionComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

defineAccordionComponent();

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionModule {}
