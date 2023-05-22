import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeIconButtonModule, ForgeIconModule, ForgeQuantityFieldModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { FormsModule } from '@angular/forms';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { QuantityFieldRoutingModule } from './quantity-field-routing.module';
import { QuantityFieldComponent } from './quantity-field.component';


@NgModule({
  declarations: [QuantityFieldComponent],
  imports: [
    CommonModule,
    QuantityFieldRoutingModule,
    FormsModule,
    ForgeIconButtonModule,
    ForgeQuantityFieldModule,
    ForgeTextFieldModule,
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class QuantityFieldModule { }
