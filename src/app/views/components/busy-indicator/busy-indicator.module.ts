import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineBusyIndicatorComponent } from '@tylertech/forge';
import { ForgeSelectModule } from '@tylertech/forge-angular';

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
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BusyIndicatorModule { }
