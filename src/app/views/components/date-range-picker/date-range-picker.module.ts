import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRangePickerRoutingModule } from './date-range-picker-routing.module';
import { DateRangePickerComponent } from './date-range-picker.component';
import { SharedModule } from '../../../shared/shared.module';
import { defineCheckboxComponent, defineDateRangePickerComponent, defineLabelValueComponent, defineSelectComponent } from '@tylertech/forge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangePickerSimpleComponent } from './date-range-picker-simple/date-range-picker-simple.component';
import { DateRangePickerReactiveFormComponent } from './date-range-picker-reactive-form/date-range-picker-reactive-form.component';
import { ForgeDateRangePickerModule, ForgeSelectModule } from '@tylertech/forge-angular';

defineDateRangePickerComponent();
defineLabelValueComponent();
defineSelectComponent();
defineCheckboxComponent();

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
    ForgeSelectModule,
    ForgeDateRangePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DateRangePickerModule { }
