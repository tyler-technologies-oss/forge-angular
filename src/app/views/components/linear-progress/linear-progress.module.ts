import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeCheckboxModule, ForgeLinearProgressModule, ForgeSliderProxyModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { LinearProgressRoutingModule } from './linear-progress-routing.module';
import { LinearProgressComponent } from './linear-progress.component';

@NgModule({
  declarations: [LinearProgressComponent],
  imports: [
    CommonModule,
    LinearProgressRoutingModule,
    FormsModule,
    SharedModule,
    ForgeCheckboxModule,
    ForgeLinearProgressModule,
    ForgeSliderProxyModule
  ]
})
export class LinearProgressModule {}
