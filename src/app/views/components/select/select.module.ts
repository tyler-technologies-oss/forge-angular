import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';

@NgModule({
    imports: [
        CommonModule,
        SelectRoutingModule,
        FormsModule,
        ForgeOptionModule,
        ForgeSelectModule,
        ForgeSelectProxyModule,
        DemoCardComponent,
        SelectComponent
    ]
})
export class SelectModule {}
