import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule, ForgeMenuModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        MenuRoutingModule,
        ForgeButtonModule,
        ForgeMenuModule,
        DemoCardComponent,
        MenuComponent
    ]
})
export class MenuModule { }
