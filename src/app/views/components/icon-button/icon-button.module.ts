import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineIconButtonComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeIconButtonModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { IconButtonRoutingModule } from './icon-button-routing.module';
import { IconButtonComponent } from './icon-button.component';

defineIconButtonComponent();

@NgModule({
  declarations: [IconButtonComponent],
  imports: [
    CommonModule,
    IconButtonRoutingModule,
    SharedModule,
    ForgeButtonModule,
    ForgeIconButtonModule
  ]
})
export class IconButtonModule {}
