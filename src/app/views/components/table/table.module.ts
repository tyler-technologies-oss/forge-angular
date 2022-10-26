import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeMenuModule, ForgePaginatorModule, ForgeTableModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { TableCellMenuComponent } from './table-cell-menu.component';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent,
    TableCellMenuComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,
    ForgeCheckboxModule,
    ForgeIconButtonModule,
    ForgeIconModule,
    ForgeMenuModule,
    ForgePaginatorModule,
    ForgeTableModule
  ]
})
export class TableModule { }
