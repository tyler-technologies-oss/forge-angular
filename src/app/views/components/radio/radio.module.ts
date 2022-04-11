import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineRadioComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { RadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio.component';

defineRadioComponent();

@NgModule({
  declarations: [RadioComponent],
  imports: [
    CommonModule,
    RadioRoutingModule,
    FormsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioModule { }
