import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeViewModule } from '../view';
import { ViewSwitcherComponent } from './view-switcher.component';

@NgModule({
	imports: [CommonModule, ForgeViewModule],
	declarations: [ViewSwitcherComponent],
	exports: [ViewSwitcherComponent, ForgeViewModule]
})
export class ForgeViewSwitcherModule {}