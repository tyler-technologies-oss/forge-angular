import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeSplitViewPanelModule } from '../split-view-panel';
import { SplitViewComponent } from './split-view.component';

@NgModule({
	imports: [CommonModule, ForgeSplitViewPanelModule],
	declarations: [SplitViewComponent],
	exports: [SplitViewComponent, ForgeSplitViewPanelModule]
})
export class ForgeSplitViewModule {}