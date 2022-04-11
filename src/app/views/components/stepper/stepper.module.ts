import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineStepperComponent, defineCheckboxComponent, defineSelectComponent } from '@tylertech/forge';
import { ForgeSelectModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';

defineStepperComponent();
defineCheckboxComponent();
defineSelectComponent();

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    StepperRoutingModule,
    FormsModule,
    SharedModule,
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StepperModule {}
