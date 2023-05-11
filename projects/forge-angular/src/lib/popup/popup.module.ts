import { NgModule } from '@angular/core';

import { PopupDirective } from './popup.directive';
import { ForgePopupProxyModule } from './popup-proxy.module';

@NgModule({
  declarations: [
    PopupDirective
  ],
  exports: [
    PopupDirective,
    ForgePopupProxyModule
  ]
})
export class ForgePopupModule {}
