import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeCheckboxModule, ForgeLinearProgressModule, ForgeSliderProxyModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { LinearProgressRoutingModule } from './linear-progress-routing.module';
import { LinearProgressComponent } from './linear-progress.component';

@NgModule({
    imports: [
        CommonModule,
        LinearProgressRoutingModule,
        FormsModule,
        ForgeCheckboxModule,
        ForgeLinearProgressModule,
        ForgeSliderProxyModule,
        DemoCardComponent,
        LinearProgressComponent
    ]
})
export class LinearProgressModule {}
