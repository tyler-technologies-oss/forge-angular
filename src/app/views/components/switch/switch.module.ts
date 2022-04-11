import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineSwitchComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';
import { ForgeSwitchModule } from '@tylertech/forge-angular';

defineSwitchComponent();

@NgModule({
  declarations: [SwitchComponent],
  imports: [
    CommonModule,
    SwitchRoutingModule,
    FormsModule,
    SharedModule,
    ForgeSwitchModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwitchModule {}
