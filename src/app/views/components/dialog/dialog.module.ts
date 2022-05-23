import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineDialogComponent, defineButtonComponent, defineDividerComponent, defineSelectComponent } from '@tylertech/forge';
import { ForgeSelectModule, ForgeSimpleDialogModule } from '@tylertech/forge-angular';


import { SharedModule } from '../../../shared/shared.module';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

defineButtonComponent();
defineDialogComponent();
defineDividerComponent();
defineSelectComponent();

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
    ForgeSimpleDialogModule,
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {}
