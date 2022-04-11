import { NgModule } from '@angular/core';

import { PopupDirective } from './popup.directive';

@NgModule({
  declarations: [
    PopupDirective
  ],
  exports: [
    PopupDirective
  ]
})
export class ForgePopupModule {}
