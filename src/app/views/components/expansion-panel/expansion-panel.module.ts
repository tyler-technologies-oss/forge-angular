import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeCardModule, ForgeExpansionPanelModule, ForgeOpenIconModule } from '@tylertech/forge-angular';

import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [
    CommonModule,
    ExpansionPanelRoutingModule,
    SharedModule,
    ForgeCardModule,
    ForgeExpansionPanelModule,
    ForgeOpenIconModule
  ]
})
export class ExpansionPanelModule {}
