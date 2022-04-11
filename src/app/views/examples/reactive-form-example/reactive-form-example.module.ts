import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormExampleRoutingModule } from './reactive-form-example-routing.module';
import { ReactiveFormExampleComponent } from './reactive-form-example.component';
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
  declarations: [ReactiveFormExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReactiveFormExampleRoutingModule,
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
export class ReactiveFormExampleModule {}
