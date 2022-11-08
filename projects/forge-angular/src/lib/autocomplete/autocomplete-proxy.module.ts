import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
	imports: [CommonModule],
	declarations: [AutocompleteComponent],
	exports: [AutocompleteComponent]
})
export class ForgeAutocompleteProxyModule {}