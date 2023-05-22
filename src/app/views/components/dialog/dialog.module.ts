import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineDialogComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';

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
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeTextFieldModule,
    DemoCardComponent
  ]
})
export class DialogModule {}
