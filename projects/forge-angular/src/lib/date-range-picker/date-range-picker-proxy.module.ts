import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateRangePickerComponent } from './date-range-picker.component';

@NgModule({
	imports: [CommonModule],
	declarations: [DateRangePickerComponent],
	exports: [DateRangePickerComponent]
})
export class ForgeDateRangePickerProxyModule {}