import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeCardModule, ForgePopupModule, ForgePopupProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup.component';
import { ExamplePopupComponent } from './example-popup.component';

@NgModule({
  declarations: [PopupComponent, ExamplePopupComponent],
  imports: [
    CommonModule,
    PopupRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCardModule,
    ForgePopupModule,
    ForgePopupProxyModule,
    ForgeTextFieldModule
  ]
})
export class PopupModule {}
