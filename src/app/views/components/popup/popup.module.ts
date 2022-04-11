import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgePopupModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup.component';
import { definePopupComponent, defineTextFieldComponent, defineButtonComponent } from '@tylertech/forge';

definePopupComponent();
defineTextFieldComponent();
defineButtonComponent();

@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    PopupRoutingModule,
    FormsModule,
    SharedModule,
    ForgePopupModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopupModule {}
