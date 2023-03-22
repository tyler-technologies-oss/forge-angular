// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineDatePickerComponent } from '@tylertech/forge';

import { DatePickerComponent } from './date-picker.component';

@NgModule({
	imports: [CommonModule],
	declarations: [DatePickerComponent],
	exports: [DatePickerComponent]
})
export class ForgeDatePickerProxyModule {
	constructor() {
		defineDatePickerComponent();
	}
}