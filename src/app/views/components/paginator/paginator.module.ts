import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgePaginatorModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { PaginatorRoutingModule } from './paginator-routing.module';
import { PaginatorComponent } from './paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    PaginatorRoutingModule,
    ForgePaginatorModule,
    DemoCardComponent
  ]
})
export class PaginatorModule {}
