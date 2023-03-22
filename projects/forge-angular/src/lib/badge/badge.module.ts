// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineBadgeComponent } from '@tylertech/forge';

import { BadgeComponent } from './badge.component';

@NgModule({
	imports: [CommonModule],
	declarations: [BadgeComponent],
	exports: [BadgeComponent]
})
export class ForgeBadgeModule {
	constructor() {
		defineBadgeComponent();
	}
}