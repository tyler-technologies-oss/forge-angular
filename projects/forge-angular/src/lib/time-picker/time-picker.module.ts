import { NgModule } from '@angular/core';

import { TimePickerValueAccessor } from './time-picker-value-accessor.directive';

@NgModule({
  declarations: [
    TimePickerValueAccessor
  ],
  exports: [
    TimePickerValueAccessor
  ]
})
export class ForgeTimePickerModule {}
