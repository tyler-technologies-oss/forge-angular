import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineToastComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeSelectModule, ForgeSelectProxyModule, ForgeSliderProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ToastRoutingModule } from './toast-routing.module';
import { ToastComponent } from './toast.component';

defineToastComponent();

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    ToastRoutingModule,
    FormsModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeSliderProxyModule,
    ForgeTextFieldModule,
    DemoCardComponent
  ]
})
export class ToastModule {}
