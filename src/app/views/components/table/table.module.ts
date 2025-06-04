import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { ForgeCheckboxModule, ForgeIconButtonModule, ForgeIconModule, ForgeMenuModule, ForgePaginatorModule, ForgeTableModule } from '@tylertech/forge-angular';
import { tylIconDelete, tylIconDetails, tylIconEdit, tylIconMoreVert } from '@tylertech/tyler-icons/standard';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { TableCellMenuComponent } from './table-cell-menu.component';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
    imports: [
        CommonModule,
        TableRoutingModule,
        ForgeCheckboxModule,
        ForgeIconButtonModule,
        ForgeIconModule,
        ForgeMenuModule,
        ForgePaginatorModule,
        ForgeTableModule,
        DemoCardComponent,
        TableComponent,
        TableCellMenuComponent
    ]
})
export class TableModule {
  constructor() {
    IconRegistry.define(tylIconMoreVert);
  }
}
