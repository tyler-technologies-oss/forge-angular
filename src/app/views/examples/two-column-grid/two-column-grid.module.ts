import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeBadgeModule, ForgeButtonModule, ForgeCardModule, ForgeFilePickerModule, ForgeIconButtonModule, ForgeIconModule, ForgeMenuModule, ForgeScaffoldModule, ForgeTextFieldModule, ForgeToolbarModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { TwoColumnGridComponent } from './two-column-grid.component';
import { TwoColumnGridRoutingModule } from './two-column-grid.routing-module';

@NgModule({
    imports: [
        CommonModule,
        TwoColumnGridRoutingModule,
        ForgeBadgeModule,
        ForgeButtonModule,
        ForgeCardModule,
        ForgeFilePickerModule,
        ForgeIconButtonModule,
        ForgeMenuModule,
        ForgeScaffoldModule,
        ForgeTextFieldModule,
        ForgeToolbarModule,
        ForgeIconModule,
        DemoCardComponent,
        TwoColumnGridComponent
    ]
})
export class TwoColumnGridModule { }
