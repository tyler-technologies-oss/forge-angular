import { NgModule } from '@angular/core';

import { DatePickerValueAccessor } from './date-picker-value-accessor.directive';

@NgModule({
  declarations: [
    DatePickerValueAccessor
  ],
  exports: [
    DatePickerValueAccessor
  ]
})
export class ForgeDatePickerModule {}
