import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeAccordionModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    ForgeAccordionModule,
    DemoCardComponent
  ]
})
export class AccordionModule {}
