import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgeDatePickerModule, ForgeDatePickerProxyModule, ForgeTextFieldModule, ForgeTimePickerModule, ForgeTimePickerProxyModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { TimePickerRoutingModule } from './time-picker-routing.module';
import { TimePickerComponent } from './time-picker.component';

@NgModule({
  declarations: [TimePickerComponent],
  imports: [
    CommonModule,
    TimePickerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ForgeDatePickerModule,
    ForgeDatePickerProxyModule,
    ForgeTextFieldModule,
    ForgeTimePickerModule,
    ForgeTimePickerProxyModule,
    DemoCardComponent
  ]
})
export class TimePickerModule {}
