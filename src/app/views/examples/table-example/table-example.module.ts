import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { defineTableComponent, defineToolbarComponent, definePaginatorComponent, defineMenuComponent, defineBadgeComponent, defineDatePickerComponent, defineSelectComponent } from '@tylertech/forge';

import { TableExampleRoutingModule } from './table-example-routing.module';
import { TableExampleComponent } from './table-example.component';
import { SharedModule } from '../../../shared/shared.module';
import { JournalService } from './journal.service';
import { MonthShortPipe } from './month-short.pipe';
import { TableMenuCellComponent } from './table-menu-cell/table-menu-cell.component';

defineTableComponent();
defineToolbarComponent();
definePaginatorComponent();
defineMenuComponent();
defineBadgeComponent();
defineDatePickerComponent();
defineSelectComponent();

@NgModule({
  declarations: [TableExampleComponent, MonthShortPipe, TableMenuCellComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    TableExampleRoutingModule
  ],
  providers: [JournalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableExampleModule { }
