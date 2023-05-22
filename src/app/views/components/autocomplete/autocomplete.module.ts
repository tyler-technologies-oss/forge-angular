import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeAutocompleteModule, ForgeAutocompleteProxyModule, ForgeIconModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    FormsModule,
    ForgeAutocompleteModule,
    ForgeAutocompleteProxyModule,
    ForgeIconModule,
    ForgeTextFieldModule,
    DemoCardComponent
  ]
})
export class AutocompleteModule { }
