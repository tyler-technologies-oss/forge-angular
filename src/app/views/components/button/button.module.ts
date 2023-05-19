import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    ForgeButtonModule,
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class ButtonModule {}
