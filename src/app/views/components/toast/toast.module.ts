import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineToastComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeOptionModule, ForgeSelectModule, ForgeSliderProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ToastRoutingModule } from './toast-routing.module';
import { ToastComponent } from './toast.component';

defineToastComponent();

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    ToastRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSliderProxyModule,
    ForgeTextFieldModule
  ]
})
export class ToastModule {}
