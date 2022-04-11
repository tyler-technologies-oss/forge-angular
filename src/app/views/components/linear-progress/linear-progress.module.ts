import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineLinearProgressComponent, defineCheckboxComponent, defineSliderComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { LinearProgressRoutingModule } from './linear-progress-routing.module';
import { LinearProgressComponent } from './linear-progress.component';

defineLinearProgressComponent();
defineCheckboxComponent();
defineSliderComponent();

@NgModule({
  declarations: [LinearProgressComponent],
  imports: [
    CommonModule,
    LinearProgressRoutingModule,
    FormsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LinearProgressModule {}
