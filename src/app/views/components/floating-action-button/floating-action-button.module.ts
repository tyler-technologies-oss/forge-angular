import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { FloatingActionButtonRoutingModule } from './floating-action-button-routing.module';
import { FloatingActionButtonComponent } from './floating-action-button.component';
import { defineFloatingActionButtonComponent } from '@tylertech/forge';

defineFloatingActionButtonComponent();

@NgModule({
  declarations: [FloatingActionButtonComponent],
  imports: [
    CommonModule,
    FloatingActionButtonRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FloatingActionButtonModule {}
