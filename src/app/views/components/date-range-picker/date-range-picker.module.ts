import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRangePickerRoutingModule } from './date-range-picker-routing.module';
import { DateRangePickerComponent } from './date-range-picker.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangePickerSimpleComponent } from './date-range-picker-simple/date-range-picker-simple.component';
import { DateRangePickerReactiveFormComponent } from './date-range-picker-reactive-form/date-range-picker-reactive-form.component';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeDateRangePickerModule, ForgeDateRangePickerProxyModule, ForgeDividerModule, ForgeLabelValueModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule, ForgeTextFieldModule, ForgeTooltipModule } from '@tylertech/forge-angular';

@NgModule({
  declarations: [
    DateRangePickerComponent,
    DateRangePickerSimpleComponent,
    DateRangePickerReactiveFormComponent
  ],
  imports: [
    CommonModule,
    DateRangePickerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeDateRangePickerModule,
    ForgeDateRangePickerProxyModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeTextFieldModule,
    ForgeTooltipModule
  ]
})
export class DateRangePickerModule { }
