import { NgModule } from '@angular/core';

import { AutocompleteValueAccessor } from './autocomplete-value-accessor.directive';

@NgModule({
  declarations: [
    AutocompleteValueAccessor
  ],
  exports: [
    AutocompleteValueAccessor
  ]
})
export class ForgeAutocompleteModule {}
