import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeButtonModule, ForgeTabBarModule, ForgeTabModule, ForgeViewModule, ForgeViewSwitcherModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ViewSwitcherRoutingModule } from './view-switcher-routing.module';
import { ViewSwitcherComponent } from './view-switcher.component';

@NgModule({
  declarations: [ViewSwitcherComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViewSwitcherRoutingModule,
    ForgeButtonModule,
    ForgeTabBarModule,
    ForgeTabModule,
    ForgeViewModule,
    ForgeViewSwitcherModule
  ]
})
export class ViewSwitcherModule { }
