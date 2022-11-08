import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeCircularProgressModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ProgressSpinnerRoutingModule } from './progress-spinner-routing.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';

@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [
    CommonModule,
    ProgressSpinnerRoutingModule,
    FormsModule,
    SharedModule,
    ForgeCircularProgressModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule
  ]
})
export class ProgressSpinnerModule {}
