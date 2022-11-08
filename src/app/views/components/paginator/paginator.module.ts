import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgePaginatorModule } from '@tylertech/forge-angular';

import { PaginatorRoutingModule } from './paginator-routing.module';
import { PaginatorComponent } from './paginator.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    PaginatorRoutingModule,
    SharedModule,
    ForgePaginatorModule
  ]
})
export class PaginatorModule {}
