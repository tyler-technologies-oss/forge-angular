import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeButtonModule, ForgeTabBarModule, ForgeViewSwitcherModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ViewSwitcherRoutingModule } from './view-switcher-routing.module';
import { ViewSwitcherComponent } from './view-switcher.component';

@NgModule({
    imports: [
        CommonModule,
        ViewSwitcherRoutingModule,
        ForgeButtonModule,
        ForgeTabBarModule,
        ForgeViewSwitcherModule,
        DemoCardComponent,
        ViewSwitcherComponent
    ]
})
export class ViewSwitcherModule { }
