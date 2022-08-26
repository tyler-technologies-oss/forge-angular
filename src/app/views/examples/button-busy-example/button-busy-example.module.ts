import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineButtonComponent, defineCheckboxComponent, defineDividerComponent, defineIconButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { ForgeButtonBusyModule } from '@tylertech/forge-angular';
import { tylIconFingerprint } from '@tylertech/tyler-icons/standard';

import { SharedModule } from '../../../shared/shared.module';
import { ButtonBusyExampleRoutingModule } from './button-busy-example-routing.module';
import { ButtonBusyExampleComponent } from './button-busy-example.component';

defineButtonComponent();
defineCheckboxComponent();
defineDividerComponent();
defineIconButtonComponent();
defineIconComponent();

IconRegistry.define(tylIconFingerprint);

@NgModule({
  declarations: [ButtonBusyExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ButtonBusyExampleRoutingModule,
    ForgeButtonBusyModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonBusyExampleModule {}
