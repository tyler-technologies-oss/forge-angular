import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineDialogComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

defineDialogComponent();

@NgModule({
  declarations: [
    DialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeTextFieldModule
  ]
})
export class DialogModule {}
