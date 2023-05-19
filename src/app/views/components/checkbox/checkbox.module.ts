import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeCheckboxModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    FormsModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    DemoCardComponent
  ]
})
export class CheckboxModule {}
