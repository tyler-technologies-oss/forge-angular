import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeScaffoldModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ScaffoldRoutingModule } from './scaffold-routing.module';
import { ScaffoldComponent } from './scaffold.component';

@NgModule({
  declarations: [
    ScaffoldComponent
  ],
  imports: [
    CommonModule,
    ScaffoldRoutingModule,
    ForgeScaffoldModule,
    DemoCardComponent
  ]
})
export class ScaffoldModule {}
