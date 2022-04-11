import { NgModule } from '@angular/core';
import { SwitchValueAccessor } from './switch-value-accessor.directive';

@NgModule({
  declarations: [
    SwitchValueAccessor
  ],
  exports: [
    SwitchValueAccessor
  ]
})
export class ForgeSwitchModule {}
