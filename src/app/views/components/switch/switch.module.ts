import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeSwitchModule, ForgeSwitchProxyModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';

@NgModule({
    imports: [
        CommonModule,
        SwitchRoutingModule,
        FormsModule,
        ForgeButtonModule,
        ForgeSwitchModule,
        ForgeSwitchProxyModule,
        DemoCardComponent,
        SwitchComponent
    ]
})
export class SwitchModule {}
