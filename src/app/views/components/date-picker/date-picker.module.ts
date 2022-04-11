import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeDatePickerModule } from '@tylertech/forge-angular';
import { defineDatePickerComponent, defineLabelValueComponent } from '@tylertech/forge';

import { DatePickerRoutingModule } from './date-picker-routing.module';
import { DatePickerComponent } from './date-picker.component';
import { SharedModule } from '../../../shared/shared.module';

defineDatePickerComponent();
defineLabelValueComponent();

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    DatePickerRoutingModule,
    FormsModule,
    SharedModule,
    ForgeDatePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatePickerModule { }
