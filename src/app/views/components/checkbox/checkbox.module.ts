import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeCheckboxModule } from '@tylertech/forge-angular';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule
  ]
})
export class CheckboxModule {}
