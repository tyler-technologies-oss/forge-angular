import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeAccordionModule, ForgeExpansionPanelModule, ForgeOpenIconModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    SharedModule,
    ForgeAccordionModule,
    ForgeExpansionPanelModule,
    ForgeOpenIconModule
  ]
})
export class AccordionModule {}
