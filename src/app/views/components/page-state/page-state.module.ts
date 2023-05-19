import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule, ForgePageStateModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { PageStateRoutingModule } from './page-state-routing.module';
import { PageStateComponent } from './page-state.component';

@NgModule({
  declarations: [PageStateComponent],
  imports: [
    CommonModule,
    PageStateRoutingModule,
    ForgeButtonModule,
    ForgePageStateModule,
    DemoCardComponent
  ]
})
export class PageStateModule {}
