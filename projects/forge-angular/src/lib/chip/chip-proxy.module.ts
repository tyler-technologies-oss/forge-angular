// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineChipComponent } from '@tylertech/forge';

import { ChipComponent } from './chip.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ChipComponent],
	exports: [ChipComponent]
})
export class ForgeChipProxyModule {
	constructor() {
		defineChipComponent();
	}
}