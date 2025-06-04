import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeTabBarModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../components/demo-card/demo-card.component';
import { TabBarComponent } from './tab-bar.component';


@NgModule({
    imports: [
        CommonModule,
        ForgeTabBarModule,
        DemoCardComponent,
        TabBarComponent
    ]
})
export class TabBarModule { }
