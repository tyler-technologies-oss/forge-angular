import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeAccordionModule, ForgeButtonAreaModule, ForgeDividerModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
    imports: [
        CommonModule,
        AccordionRoutingModule,
        ForgeAccordionModule,
        ForgeButtonAreaModule,
        ForgeDividerModule,
        DemoCardComponent,
        AccordionComponent
    ]
})
export class AccordionModule {}
