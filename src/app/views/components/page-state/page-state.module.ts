import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule, ForgePageStateModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { PageStateRoutingModule } from './page-state-routing.module';
import { PageStateComponent } from './page-state.component';

@NgModule({
  declarations: [PageStateComponent],
  imports: [
    CommonModule,
    PageStateRoutingModule,
    SharedModule,
    ForgeButtonModule,
    ForgePageStateModule
  ]
})
export class PageStateModule {}
