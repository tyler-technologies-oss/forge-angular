import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { FormValidityDirectiveExampleComponent } from './form-validity-directive-example.component';
import { FormValidityDirectiveExampleRoutingModule } from './form-validity-directive-example-routing.module';
import {
  defineTextFieldComponent,
  defineDatePickerComponent,
  defineSelectComponent,
  defineButtonComponent,
  defineCheckboxComponent,
  defineRadioComponent,
  defineChipSetComponent,
  defineChipComponent,
  defineSliderComponent,
  defineAutocompleteComponent,
  defineTimePickerComponent,
  defineQuantityFieldComponent
} from '@tylertech/forge';
import {
  FormValidityModule,
  ForgeSelectModule,
  ForgeDatePickerModule,
  ForgeChipModule,
  ForgeAutocompleteModule,
  ForgeSliderModule,
  ForgeTimePickerModule,
  ForgeSwitchModule
} from '@tylertech/forge-angular';

defineTextFieldComponent();
defineDatePickerComponent();
defineSelectComponent();
defineButtonComponent();
defineCheckboxComponent();
defineRadioComponent();
defineChipSetComponent();
defineChipComponent();
defineSliderComponent();
defineAutocompleteComponent();
defineTimePickerComponent();
defineQuantityFieldComponent();

@NgModule({
  declarations: [FormValidityDirectiveExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormValidityDirectiveExampleRoutingModule,
    FormValidityModule,
    ForgeAutocompleteModule,
    ForgeSliderModule,
    ForgeSelectModule,
    ForgeDatePickerModule,
    ForgeChipModule,
    ForgeTimePickerModule,
    ForgeSwitchModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormValidityDirectiveExampleModule {}
