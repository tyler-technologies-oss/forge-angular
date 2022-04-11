import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineChipSetComponent, defineChipComponent } from '@tylertech/forge';

import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsComponent } from './chips.component';
import { SharedModule } from '../../../shared/shared.module';

defineChipSetComponent();
defineChipComponent();

@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    ChipsRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChipsModule { }
