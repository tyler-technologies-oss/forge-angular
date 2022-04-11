import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineSelectComponent } from '@tylertech/forge';
import { ForgeSelectModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';

defineSelectComponent();

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    SelectRoutingModule,
    FormsModule,
    SharedModule,
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectModule {}
