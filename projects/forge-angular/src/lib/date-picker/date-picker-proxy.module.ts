import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
	imports: [CommonModule],
	declarations: [DatePickerComponent],
	exports: [DatePickerComponent]
})
export class ForgeDatePickerProxyModule {}