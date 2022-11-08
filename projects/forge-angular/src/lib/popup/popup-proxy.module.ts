import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';

@NgModule({
	imports: [CommonModule],
	declarations: [PopupComponent],
	exports: [PopupComponent]
})
export class ForgePopupProxyModule {}