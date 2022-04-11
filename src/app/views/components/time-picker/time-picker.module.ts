import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimePickerRoutingModule } from './time-picker-routing.module';
import { TimePickerComponent } from './time-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { defineDatePickerComponent, defineTimePickerComponent } from '@tylertech/forge';
import { ForgeDatePickerModule, ForgeTimePickerModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';

defineDatePickerComponent();
defineTimePickerComponent();

@NgModule({
  declarations: [TimePickerComponent],
  imports: [
    CommonModule,
    TimePickerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ForgeDatePickerModule,
    ForgeTimePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimePickerModule {}
