import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuantityFieldModule { }
