import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeBadgeModule, ForgeButtonModule, ForgeCardModule, ForgeFilePickerModule, ForgeIconButtonModule, ForgeMenuModule, ForgeScaffoldModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { TwoColumnGridComponent } from './two-column-grid.component';
import { TwoColumnGridRoutingModule } from './two-column-grid.routing-module';

@NgModule({
  declarations: [TwoColumnGridComponent],
  imports: [
    CommonModule,
    SharedModule,
    TwoColumnGridRoutingModule,
    ForgeBadgeModule,
    ForgeButtonModule,
    ForgeCardModule,
    ForgeFilePickerModule,
    ForgeIconButtonModule,
    ForgeMenuModule,
    ForgeScaffoldModule,
    ForgeTextFieldModule,
    ForgeToolbarModule
  ]
})
export class TwoColumnGridModule { }
