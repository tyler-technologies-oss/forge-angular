import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { defineToastComponent, defineSelectComponent, defineTextFieldComponent, defineButtonComponent } from '@tylertech/forge';
import { ForgeSelectModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ToastRoutingModule } from './toast-routing.module';
import { ToastComponent } from './toast.component';

defineToastComponent();
defineSelectComponent();
defineTextFieldComponent();
defineButtonComponent();

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    ToastRoutingModule,
    FormsModule,
    SharedModule,
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToastModule {}
