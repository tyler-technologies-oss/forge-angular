import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineTextFieldComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { TextFieldRoutingModule } from './text-field-routing.module';
import { TextFieldComponent } from './text-field.component';

defineTextFieldComponent();

@NgModule({
  declarations: [TextFieldComponent],
  imports: [
    CommonModule,
    TextFieldRoutingModule,
    FormsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TextFieldModule { }
