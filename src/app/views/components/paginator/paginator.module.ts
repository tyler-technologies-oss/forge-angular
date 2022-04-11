import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { definePaginatorComponent } from '@tylertech/forge';

import { PaginatorRoutingModule } from './paginator-routing.module';
import { PaginatorComponent } from './paginator.component';
import { SharedModule } from '../../../shared/shared.module';

definePaginatorComponent();

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    PaginatorRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginatorModule {}
