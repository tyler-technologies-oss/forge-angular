// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineListComponent } from '@tylertech/forge';

import { ForgeListItemModule } from '../list-item/list-item.module';
import { ListComponent } from './list.component';

@NgModule({
	imports: [CommonModule, ForgeListItemModule],
	declarations: [ListComponent],
	exports: [ListComponent, ForgeListItemModule]
})
export class ForgeListProxyModule {
	constructor() {
		defineListComponent();
	}
}