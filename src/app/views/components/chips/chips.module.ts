import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeChipProxyModule, ForgeChipSetModule, ForgeIconButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsComponent } from './chips.component';

@NgModule({
    imports: [
        CommonModule,
        ChipsRoutingModule,
        ForgeChipProxyModule,
        ForgeChipSetModule,
        ForgeIconButtonModule,
        ForgeIconModule,
        DemoCardComponent,
        ChipsComponent
    ]
})
export class ChipsModule { }
