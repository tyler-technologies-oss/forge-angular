import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { TextFieldRoutingModule } from './text-field-routing.module';
import { TextFieldComponent } from './text-field.component';


@NgModule({
  declarations: [TextFieldComponent],
  imports: [
    CommonModule,
    TextFieldRoutingModule,
    FormsModule,
    SharedModule,
    ForgeTextFieldModule
  ]
})
export class TextFieldModule { }
