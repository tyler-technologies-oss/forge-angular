import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeTabBarModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { TabBarRoutingModule } from './tab-bar-routing.module';
import { TabBarComponent } from './tab-bar.component';


@NgModule({
  declarations: [TabBarComponent],
  imports: [
    CommonModule,
    TabBarRoutingModule,
    SharedModule,
    ForgeTabBarModule
  ]
})
export class TabBarModule { }
