import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineAvatarComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule, ForgeTextFieldModule, ForgeTooltipModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';

defineAvatarComponent();

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeTextFieldModule,
    ForgeTooltipModule
  ]
})
export class TooltipModule { }
