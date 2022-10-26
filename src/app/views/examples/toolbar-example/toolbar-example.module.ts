import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeBadgeModule, ForgeButtonModule, ForgeCardModule, ForgeDividerModule, ForgeLabelValueModule, ForgePaginatorModule, ForgeScaffoldModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ToolbarExampleComponent } from './toolbar-example.component';
import { ToolbarExampleRoutingModule } from './toolbar-example.routing-module';


@NgModule({
  declarations: [ToolbarExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ToolbarExampleRoutingModule,
    ForgeBadgeModule,
    ForgeButtonModule,
    ForgeCardModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgePaginatorModule,
    ForgeScaffoldModule,
    ForgeToolbarModule
  ]
})
export class ToolbarExampleModule {}
