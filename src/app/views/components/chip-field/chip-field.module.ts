import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconRegistry } from '@tylertech/forge';
import { ForgeAutocompleteModule, ForgeAutocompleteProxyModule, ForgeButtonModule, ForgeCheckboxModule, ForgeChipFieldModule, ForgeChipProxyModule, ForgeDividerModule, ForgeIconModule } from '@tylertech/forge-angular';
import { tylIconPlace } from '@tylertech/tyler-icons/standard';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ChipFieldAutocompleteReactiveFormComponent } from './chip-field-autocomplete-reactive-form/chip-field-autocomplete-reactive-form.component';
import { ChipFieldAutocompleteComponent } from './chip-field-autocomplete/chip-field-autocomplete.component';
import { ChipFieldRoutingModule } from './chip-field-routing.module';
import { ChipFieldSimpleReactiveFormComponent } from './chip-field-simple-reactive-form/chip-field-simple-reactive-form.component';
import { ChipFieldSimpleComponent } from './chip-field-simple/chip-field-simple.component';
import { ChipFieldComponent } from './chip-field.component';

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
    FormsModule,
    ReactiveFormsModule,
    ForgeAutocompleteModule,
    ForgeAutocompleteProxyModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeChipFieldModule,
    ForgeChipProxyModule,
    ForgeDividerModule,
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class ChipFieldModule {
  constructor() {
    IconRegistry.define(tylIconPlace);
  }
}
