import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeOptionModule } from '../option';
import { SelectComponent } from './select.component';

@NgModule({
	imports: [CommonModule, ForgeOptionModule],
	declarations: [SelectComponent],
	exports: [SelectComponent, ForgeOptionModule]
})
export class ForgeSelectProxyModule {}