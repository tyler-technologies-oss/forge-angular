import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeChipProxyModule, ForgeChipSetModule, ForgeIconButtonModule } from '@tylertech/forge-angular';

import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsComponent } from './chips.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    ChipsRoutingModule,
    SharedModule,
    ForgeChipProxyModule,
    ForgeChipSetModule,
    ForgeIconButtonModule
  ]
})
export class ChipsModule { }
