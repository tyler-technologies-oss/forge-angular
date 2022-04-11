import { NgModule } from '@angular/core';

import { ButtonToggleGroupValueAccessor } from './button-toggle-group-value-accessor.directive';

@NgModule({
  declarations: [
    ButtonToggleGroupValueAccessor
  ],
  exports: [
    ButtonToggleGroupValueAccessor
  ]
})
export class ForgeButtonToggleModule {}
