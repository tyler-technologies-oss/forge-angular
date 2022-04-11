import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  defineButtonComponent,
  defineTooltipComponent,
  defineTextFieldComponent,
  defineSelectComponent,
  defineAvatarComponent,
  defineCheckboxComponent
} from '@tylertech/forge';
import { ForgeSelectModule } from '@tylertech/forge-angular';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';
import { SharedModule } from '../../../shared/shared.module';

defineButtonComponent();
defineTooltipComponent();
defineTextFieldComponent();
defineCheckboxComponent();
defineSelectComponent();
defineAvatarComponent();

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    FormsModule,
    SharedModule,
    ForgeSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TooltipModule { }
