import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeTabBarModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { TabBarRoutingModule } from './tab-bar-routing.module';
import { TabBarComponent } from './tab-bar.component';


@NgModule({
    imports: [
        CommonModule,
        TabBarRoutingModule,
        ForgeTabBarModule,
        DemoCardComponent,
        TabBarComponent
    ]
})
export class TabBarModule { }
