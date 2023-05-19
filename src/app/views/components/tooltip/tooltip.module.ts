import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineAvatarComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeSelectModule, ForgeSelectProxyModule, ForgeTextFieldModule, ForgeTooltipModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';

defineAvatarComponent();

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    FormsModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeTextFieldModule,
    ForgeTooltipModule,
    DemoCardComponent
  ]
})
export class TooltipModule { }
