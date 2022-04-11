import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineCircularProgressComponent, defineSelectComponent } from '@tylertech/forge';
import { ForgeSelectModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ProgressSpinnerRoutingModule } from './progress-spinner-routing.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';

defineCircularProgressComponent();
defineSelectComponent();

@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [
    CommonModule,
    ProgressSpinnerRoutingModule,
    FormsModule,
    SharedModule,
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgressSpinnerModule {}
