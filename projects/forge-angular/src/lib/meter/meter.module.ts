// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineMeterComponent } from '@tylertech/forge';

import { MeterComponent } from './meter.component';

@NgModule({
	imports: [CommonModule],
	declarations: [MeterComponent],
	exports: [MeterComponent]
})
export class ForgeMeterModule {
	constructor() {
		defineMeterComponent();
	}
}