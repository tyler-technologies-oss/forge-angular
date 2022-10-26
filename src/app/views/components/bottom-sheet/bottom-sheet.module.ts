import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import { BottomSheetComponent } from './bottom-sheet.component';
import { SharedModule } from '../../../shared/shared.module';
import { ConfirmBottomSheetComponent } from './confirm/confirm-bottom-sheet.component';
import { defineBottomSheetComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

defineBottomSheetComponent();

@NgModule({
  declarations: [
    BottomSheetComponent,
    ConfirmBottomSheetComponent
  ],
  imports: [
    BottomSheetRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeTextFieldModule
  ]
})
export class BottomSheetModule { }
