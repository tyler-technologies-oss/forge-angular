import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineBusyIndicatorComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { BusyIndicatorRoutingModule } from './busy-indicator-routing.module';
import { BusyIndicatorComponent } from './busy-indicator.component';

defineBusyIndicatorComponent();

@NgModule({
  declarations: [BusyIndicatorComponent],
  imports: [
    CommonModule,
    BusyIndicatorRoutingModule,
    FormsModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeTextFieldModule,
    DemoCardComponent
  ]
})
export class BusyIndicatorModule { }
