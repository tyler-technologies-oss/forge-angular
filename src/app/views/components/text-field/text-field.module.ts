import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconRegistry } from '@tylertech/forge';
import { ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';
import { tylIconEvent } from '@tylertech/tyler-icons/standard';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { TextFieldRoutingModule } from './text-field-routing.module';
import { TextFieldComponent } from './text-field.component';


@NgModule({
  declarations: [TextFieldComponent],
  imports: [
    CommonModule,
    TextFieldRoutingModule,
    FormsModule,
    ForgeTextFieldModule,
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class TextFieldModule {
  constructor() {
    IconRegistry.define(tylIconEvent);
  }
}
