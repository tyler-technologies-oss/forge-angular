import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule,
    ForgeButtonModule
  ]
})
export class ButtonModule {}
