import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ForgeBadgeModule, ForgeButtonModule, ForgeDatePickerModule, ForgeDividerModule, ForgeIconButtonModule, ForgeMenuModule, ForgePaginatorModule, ForgeSelectProxyModule, ForgeTableModule, ForgeToolbarModule, ForgeTooltipModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { JournalService } from './journal.service';
import { MonthShortPipe } from './month-short.pipe';
import { TableExampleRoutingModule } from './table-example-routing.module';
import { TableExampleComponent } from './table-example.component';
import { TableMenuCellComponent } from './table-menu-cell/table-menu-cell.component';
@NgModule({
  declarations: [TableExampleComponent, MonthShortPipe, TableMenuCellComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    TableExampleRoutingModule,
    ForgeButtonModule,
    ForgeDividerModule,
    ForgeIconButtonModule,
    ForgeTooltipModule,
    ForgeTableModule,
    ForgeToolbarModule,
    ForgePaginatorModule,
    ForgeMenuModule,
    ForgeBadgeModule,
    ForgeDatePickerModule,
    ForgeSelectProxyModule
  ],
  providers: [JournalService]
})
export class TableExampleModule { }
