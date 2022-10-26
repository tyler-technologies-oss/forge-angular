import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeAutocompleteModule, ForgeAutocompleteProxyModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    SharedModule,
    FormsModule,
    ForgeAutocompleteModule,
    ForgeAutocompleteProxyModule,
    ForgeIconModule,
    ForgeTextFieldModule

  ]
})
export class AutocompleteModule { }
