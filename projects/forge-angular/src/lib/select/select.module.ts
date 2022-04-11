import { NgModule } from '@angular/core';

import { SelectValueAccessor } from './select-value-accessor.directive';

@NgModule({
  declarations: [
    SelectValueAccessor
  ],
  exports: [
    SelectValueAccessor
  ]
})
export class ForgeSelectModule {}
