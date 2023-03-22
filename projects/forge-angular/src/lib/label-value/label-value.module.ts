// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineLabelValueComponent } from '@tylertech/forge';

import { LabelValueComponent } from './label-value.component';

@NgModule({
	imports: [CommonModule],
	declarations: [LabelValueComponent],
	exports: [LabelValueComponent]
})
export class ForgeLabelValueModule {
	constructor() {
		defineLabelValueComponent();
	}
}