import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeScaffoldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ScaffoldRoutingModule } from './scaffold-routing.module';
import { ScaffoldComponent } from './scaffold.component';

@NgModule({
  declarations: [
    ScaffoldComponent
  ],
  imports: [
    CommonModule,
    ScaffoldRoutingModule,
    SharedModule,
    ForgeScaffoldModule
  ]
})
export class ScaffoldModule {}
