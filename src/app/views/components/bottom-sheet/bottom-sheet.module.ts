import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineBottomSheetComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import { BottomSheetComponent } from './bottom-sheet.component';
import { ConfirmBottomSheetComponent } from './confirm/confirm-bottom-sheet.component';

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
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeTextFieldModule,
    DemoCardComponent
  ]
})
export class BottomSheetModule { }
