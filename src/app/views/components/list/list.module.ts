import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';

import { ForgeListItemModule, ForgeListModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ListRoutingModule,
        ForgeListModule,
        ForgeListItemModule,
        DemoCardComponent,
        ListComponent
    ]
})
export class ListModule { }
