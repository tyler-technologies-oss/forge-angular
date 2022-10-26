import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgeDatePickerModule, ForgeDatePickerProxyModule, ForgeTextFieldModule, ForgeTimePickerModule, ForgeTimePickerProxyModule } from '@tylertech/forge-angular';
import { TimePickerRoutingModule } from './time-picker-routing.module';
import { TimePickerComponent } from './time-picker.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [TimePickerComponent],
  imports: [
    CommonModule,
    TimePickerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ForgeDatePickerModule,
    ForgeDatePickerProxyModule,
    ForgeTextFieldModule,
    ForgeTimePickerModule,
    ForgeTimePickerProxyModule
  ]
})
export class TimePickerModule {}
