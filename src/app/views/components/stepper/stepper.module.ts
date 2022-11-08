import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule, ForgeStepModule, ForgeStepperModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    StepperRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeStepperModule
  ]
})
export class StepperModule {}
