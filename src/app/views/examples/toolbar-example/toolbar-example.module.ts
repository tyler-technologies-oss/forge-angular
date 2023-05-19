import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeBadgeModule, ForgeButtonModule, ForgeCardModule, ForgeDividerModule, ForgeLabelValueModule, ForgePaginatorModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ToolbarExampleComponent } from './toolbar-example.component';
import { ToolbarExampleRoutingModule } from './toolbar-example.routing-module';

@NgModule({
  declarations: [ToolbarExampleComponent],
  imports: [
    CommonModule,
    ToolbarExampleRoutingModule,
    ForgeBadgeModule,
    ForgeButtonModule,
    ForgeCardModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgePaginatorModule,
    ForgeScaffoldModule,
    ForgeToolbarModule,
    DemoCardComponent
  ]
})
export class ToolbarExampleModule {}
