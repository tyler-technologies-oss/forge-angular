// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineStateLayerComponent } from '@tylertech/forge';

import { StateLayerComponent } from './state-layer.component';

@NgModule({
	imports: [CommonModule],
	declarations: [StateLayerComponent],
	exports: [StateLayerComponent]
})
export class ForgeStateLayerModule {
	constructor() {
		defineStateLayerComponent();
	}
}