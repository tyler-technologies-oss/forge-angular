// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineAppBarNotificationButtonComponent } from '@tylertech/forge';

import { AppBarNotificationButtonComponent } from './app-bar-notification-button.component';

@NgModule({
	imports: [CommonModule],
	declarations: [AppBarNotificationButtonComponent],
	exports: [AppBarNotificationButtonComponent]
})
export class ForgeAppBarNotificationButtonModule {
	constructor() {
		defineAppBarNotificationButtonComponent();
	}
}