import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineAutocompleteComponent, defineTextFieldComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';
import { ForgeAutocompleteModule } from '@tylertech/forge-angular';

defineTextFieldComponent();
defineAutocompleteComponent();

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    SharedModule,
    FormsModule,
    ForgeAutocompleteModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutocompleteModule { }
