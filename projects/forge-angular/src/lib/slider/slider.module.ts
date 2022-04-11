import { NgModule } from '@angular/core';

import { SliderValueAccessor } from './slider-value-accessor.directive';

@NgModule({
  declarations: [
    SliderValueAccessor
  ],
  exports: [
    SliderValueAccessor
  ]
})
export class ForgeSliderModule {}
