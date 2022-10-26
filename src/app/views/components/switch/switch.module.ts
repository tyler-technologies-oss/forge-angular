import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ForgeButtonModule, ForgeSwitchModule, ForgeSwitchProxyModule } from '@tylertech/forge-angular';
import { SharedModule } from '../../../shared/shared.module';
import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';

@NgModule({
  declarations: [SwitchComponent],
  imports: [
    CommonModule,
    SwitchRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeSwitchModule,
    ForgeSwitchProxyModule
  ]
})
export class SwitchModule {}
