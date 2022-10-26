import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeIconButtonModule, ForgeQuantityFieldModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { QuantityFieldRoutingModule } from './quantity-field-routing.module';
import { QuantityFieldComponent } from './quantity-field.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuantityFieldComponent],
  imports: [
    CommonModule,
    QuantityFieldRoutingModule,
    SharedModule,
    FormsModule,
    ForgeIconButtonModule,
    ForgeQuantityFieldModule,
    ForgeTextFieldModule
  ]
})
export class QuantityFieldModule { }
