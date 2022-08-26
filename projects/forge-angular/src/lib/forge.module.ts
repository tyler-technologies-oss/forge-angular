import { NgModule } from '@angular/core';

import { ForgeAutocompleteModule } from './autocomplete/autocomplete.module';
import { ForgeButtonBusyModule } from './button-busy';
import { ForgeButtonToggleModule } from './button-toggle/button-toggle.module';
import { ForgeChipModule } from './chip/chip.module';
import { ForgeDatePickerModule } from './date-picker/date-picker.module';
import { ForgeDateRangePickerModule } from './date-range-picker/date-range-picker.module';
import { ForgePopupModule } from './popup/popup.module';
import { ForgeSelectModule } from './select/select.module';
import { ForgeSliderModule } from './slider/slider.module';
import { ForgeSwitchModule } from './switch';
import { ForgeTimePickerModule } from './time-picker/time-picker.module';

@NgModule({
  imports: [
    ForgeAutocompleteModule,
    ForgeButtonBusyModule,
    ForgeButtonToggleModule,
    ForgeChipModule,
    ForgeDatePickerModule,
    ForgeDateRangePickerModule,
    ForgePopupModule,
    ForgeSelectModule,
    ForgeSliderModule,
    ForgeSwitchModule,
    ForgeTimePickerModule
  ],
  exports: [
    ForgeAutocompleteModule,
    ForgeButtonBusyModule,
    ForgeButtonToggleModule,
    ForgeChipModule,
    ForgeDatePickerModule,
    ForgeDateRangePickerModule,
    ForgePopupModule,
    ForgeSelectModule,
    ForgeSliderModule,
    ForgeSwitchModule,
    ForgeTimePickerModule
  ]
})
export class ForgeModule {}
