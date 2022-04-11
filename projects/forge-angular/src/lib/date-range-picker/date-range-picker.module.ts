import { NgModule } from '@angular/core';
import { DateRangePickerValueAccessor } from './date-range-picker-value-accessor.directive';


@NgModule({
  declarations: [
    DateRangePickerValueAccessor
  ],
  exports: [
    DateRangePickerValueAccessor
  ]
})
export class ForgeDateRangePickerModule {}
