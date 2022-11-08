import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeTabModule } from '../tab';
import { TabBarComponent } from './tab-bar.component';

@NgModule({
	imports: [CommonModule, ForgeTabModule],
	declarations: [TabBarComponent],
	exports: [TabBarComponent, ForgeTabModule]
})
export class ForgeTabBarModule {}