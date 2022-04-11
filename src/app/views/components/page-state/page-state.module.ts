import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { definePageStateComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { PageStateRoutingModule } from './page-state-routing.module';
import { PageStateComponent } from './page-state.component';

definePageStateComponent();

@NgModule({
  declarations: [PageStateComponent],
  imports: [
    CommonModule,
    PageStateRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageStateModule {}
