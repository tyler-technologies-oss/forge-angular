// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineLabelComponent } from '@tylertech/forge';

import { LabelComponent } from './label.component';

@NgModule({
	imports: [CommonModule],
	declarations: [LabelComponent],
	exports: [LabelComponent]
})
export class ForgeLabelModule {
	constructor() {
		defineLabelComponent();
	}
}