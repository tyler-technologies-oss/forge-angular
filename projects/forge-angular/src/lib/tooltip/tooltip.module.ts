// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineTooltipComponent } from '@tylertech/forge';

import { TooltipComponent } from './tooltip.component';

@NgModule({
	imports: [CommonModule],
	declarations: [TooltipComponent],
	exports: [TooltipComponent]
})
export class ForgeTooltipModule {
	constructor() {
		defineTooltipComponent();
	}
}