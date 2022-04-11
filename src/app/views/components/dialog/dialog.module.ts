import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineDialogComponent, defineButtonComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

defineDialogComponent();
defineButtonComponent();

@NgModule({
  declarations: [
    DialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    FormsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {}
