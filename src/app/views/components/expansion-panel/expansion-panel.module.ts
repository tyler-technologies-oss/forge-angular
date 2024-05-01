import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeButtonAreaModule, ForgeCardModule, ForgeExpansionPanelModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { ExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [
    CommonModule,
    ExpansionPanelRoutingModule,
    ForgeCardModule,
    ForgeExpansionPanelModule,
    ForgeButtonAreaModule,
    DemoCardComponent
  ]
})
export class ExpansionPanelModule {}
