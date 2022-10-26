import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineBusyIndicatorComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { BusyIndicatorRoutingModule } from './busy-indicator-routing.module';
import { BusyIndicatorComponent } from './busy-indicator.component';

defineBusyIndicatorComponent();

@NgModule({
  declarations: [BusyIndicatorComponent],
  imports: [
    CommonModule,
    BusyIndicatorRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeTextFieldModule
  ]
})
export class BusyIndicatorModule { }
