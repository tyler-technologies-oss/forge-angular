import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { ForgeBadgeModule, ForgeButtonModule, ForgeDatePickerModule, ForgeDividerModule, ForgeIconButtonModule, ForgeMenuModule, ForgePaginatorModule, ForgeSelectProxyModule, ForgeTableModule, ForgeToolbarModule, ForgeTooltipModule } from '@tylertech/forge-angular';
import { tylIconAttachFile, tylIconChevronRight, tylIconClose, tylIconCompareArrows, tylIconFilterList, tylIconImportExport, tylIconMoreVert, tylIconNotInterested, tylIconNoteAdd, tylIconPrint, tylIconViewColumn } from '@tylertech/tyler-icons/standard';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { JournalService } from './journal.service';
import { MonthShortPipe } from './month-short.pipe';
import { TableExampleRoutingModule } from './table-example-routing.module';
import { TableExampleComponent } from './table-example.component';
import { TableMenuCellComponent } from './table-menu-cell/table-menu-cell.component';

@NgModule({
    imports: [
        CommonModule,
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
        ForgeSelectProxyModule,
        DemoCardComponent,
        TableExampleComponent, MonthShortPipe, TableMenuCellComponent
    ],
    providers: [
        JournalService,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class TableExampleModule {
  constructor() {
    IconRegistry.define([
      tylIconAttachFile,
      tylIconChevronRight,
      tylIconClose,
      tylIconCompareArrows,
      tylIconFilterList,
      tylIconImportExport,
      tylIconMoreVert,
      tylIconNoteAdd,
      tylIconNotInterested,
      tylIconPrint,
      tylIconViewColumn
    ]);
  }
}
