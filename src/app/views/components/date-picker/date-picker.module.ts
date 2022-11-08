import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineDatePickerComponent, defineLabelValueComponent } from '@tylertech/forge';
import { ForgeDatePickerModule, ForgeDatePickerProxyModule, ForgeDividerModule, ForgeLabelValueModule, ForgeOptionModule, ForgeSelectProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { DatePickerRoutingModule } from './date-picker-routing.module';
import { DatePickerComponent } from './date-picker.component';

defineDatePickerComponent();
defineLabelValueComponent();

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    DatePickerRoutingModule,
    FormsModule,
    SharedModule,
    ForgeDatePickerModule,
    ForgeDatePickerProxyModule,
    ForgeDividerModule,
    ForgeLabelValueModule,
    ForgeOptionModule,
    ForgeSelectProxyModule,
    ForgeTextFieldModule
  ]
})
export class DatePickerModule { }
