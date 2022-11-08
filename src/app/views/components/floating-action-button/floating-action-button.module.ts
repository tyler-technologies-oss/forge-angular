import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineFloatingActionButtonComponent } from '@tylertech/forge';
import { ForgeFloatingActionButtonModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { FloatingActionButtonRoutingModule } from './floating-action-button-routing.module';
import { FloatingActionButtonComponent } from './floating-action-button.component';

defineFloatingActionButtonComponent();

@NgModule({
  declarations: [FloatingActionButtonComponent],
  imports: [
    CommonModule,
    FloatingActionButtonRoutingModule,
    SharedModule,
    ForgeFloatingActionButtonModule
  ]
})
export class FloatingActionButtonModule {}
