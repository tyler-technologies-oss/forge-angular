import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipComponent } from './chip.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ChipComponent],
	exports: [ChipComponent]
})
export class ForgeChipProxyModule {}