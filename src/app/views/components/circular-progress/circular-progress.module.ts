import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeCircularProgressModule, ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { CircularProgressRoutingModule } from './circular-progress-routing.module';
import { CircularProgressComponent } from './circular-progress.component';

@NgModule({
  declarations: [CircularProgressComponent],
  imports: [
    CommonModule,
    CircularProgressRoutingModule,
    FormsModule,
    ForgeCircularProgressModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    DemoCardComponent
  ]
})
export class CircularProgressModule {}
