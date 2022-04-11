import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineIconButtonComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { IconButtonRoutingModule } from './icon-button-routing.module';
import { IconButtonComponent } from './icon-button.component';

defineIconButtonComponent();

@NgModule({
  declarations: [IconButtonComponent],
  imports: [
    CommonModule,
    IconButtonRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconButtonModule {}
