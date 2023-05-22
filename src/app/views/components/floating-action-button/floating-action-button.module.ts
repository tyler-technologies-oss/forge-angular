import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineFloatingActionButtonComponent } from '@tylertech/forge';
import { ForgeFloatingActionButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { FloatingActionButtonRoutingModule } from './floating-action-button-routing.module';
import { FloatingActionButtonComponent } from './floating-action-button.component';

defineFloatingActionButtonComponent();

@NgModule({
  declarations: [FloatingActionButtonComponent],
  imports: [
    CommonModule,
    FloatingActionButtonRoutingModule,
    ForgeFloatingActionButtonModule,
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class FloatingActionButtonModule {}
