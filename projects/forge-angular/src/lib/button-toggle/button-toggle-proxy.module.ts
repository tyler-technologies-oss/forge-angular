import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonToggleComponent } from './button-toggle.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ButtonToggleComponent],
	exports: [ButtonToggleComponent]
})
export class ForgeButtonToggleProxyModule {}