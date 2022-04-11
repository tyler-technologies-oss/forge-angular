import { NgModule } from '@angular/core';

import { ChipValueAccessor } from './chip-value-accessor.directive';

@NgModule({
  declarations: [
    ChipValueAccessor
  ],
  exports: [
    ChipValueAccessor
  ]
})
export class ForgeChipModule {}
