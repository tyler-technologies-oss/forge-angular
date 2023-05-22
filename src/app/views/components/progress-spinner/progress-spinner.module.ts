import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeCircularProgressModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ProgressSpinnerRoutingModule } from './progress-spinner-routing.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';

@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [
    CommonModule,
    ProgressSpinnerRoutingModule,
    FormsModule,
    ForgeCircularProgressModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    DemoCardComponent
  ]
})
export class ProgressSpinnerModule {}
