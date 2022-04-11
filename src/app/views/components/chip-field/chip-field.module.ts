import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipFieldRoutingModule } from './chip-field-routing.module';
import { ChipFieldComponent } from './chip-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ForgeAutocompleteModule } from '@tylertech/forge-angular';
import { defineAutocompleteComponent, defineChipComponent, defineChipFieldComponent } from '@tylertech/forge';
import { ChipFieldSimpleComponent } from './chip-field-simple/chip-field-simple.component';
import { ChipFieldSimpleReactiveFormComponent } from './chip-field-simple-reactive-form/chip-field-simple-reactive-form.component';
import { ChipFieldAutocompleteComponent } from './chip-field-autocomplete/chip-field-autocomplete.component';
import { ChipFieldAutocompleteReactiveFormComponent } from './chip-field-autocomplete-reactive-form/chip-field-autocomplete-reactive-form.component';

defineAutocompleteComponent();
defineChipComponent();
defineChipFieldComponent();

@NgModule({
  declarations: [
    ChipFieldComponent,
    ChipFieldSimpleComponent,
    ChipFieldSimpleReactiveFormComponent,
    ChipFieldAutocompleteComponent,
    ChipFieldAutocompleteReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ChipFieldRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ForgeAutocompleteModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChipFieldModule { }
