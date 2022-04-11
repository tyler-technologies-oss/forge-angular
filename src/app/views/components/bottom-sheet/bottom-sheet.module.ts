import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import { BottomSheetComponent } from './bottom-sheet.component';
import { SharedModule } from '../../../shared/shared.module';
import { ConfirmBottomSheetComponent } from './confirm/confirm-bottom-sheet.component';
import { defineBottomSheetComponent } from '@tylertech/forge';

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
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BottomSheetModule { }
