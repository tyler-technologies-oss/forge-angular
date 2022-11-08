import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgePopupModule, ForgePopupProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup.component';

@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    PopupRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgePopupModule,
    ForgePopupProxyModule,
    ForgeTextFieldModule
  ]
})
export class PopupModule {}
