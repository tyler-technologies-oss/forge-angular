import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgePopupModule, ForgePopupProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup.component';

@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    PopupRoutingModule,
    FormsModule,
    ForgeButtonModule,
    ForgePopupModule,
    ForgePopupProxyModule,
    ForgeTextFieldModule,
    DemoCardComponent
  ]
})
export class PopupModule {}
