import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineTableComponent, definePaginatorComponent } from '@tylertech/forge';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { SharedModule } from '../../../shared/shared.module';
import { TableCellMenuComponent } from './table-cell-menu.component';

defineTableComponent();
definePaginatorComponent();

@NgModule({
  declarations: [
    TableComponent,
    TableCellMenuComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableModule { }
