import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeCardModule, ForgeExpansionPanelModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { ExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [
    CommonModule,
    ExpansionPanelRoutingModule,
    SharedModule,
    ForgeCardModule,
    ForgeExpansionPanelModule
  ]
})
export class ExpansionPanelModule {}
