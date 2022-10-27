import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeAccordionModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    SharedModule,
    ForgeAccordionModule
  ]
})
export class AccordionModule {}
