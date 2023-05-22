import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeIconModule, ForgeInlineMessageModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { InlineMessageRoutingModule } from './inline-message-routing.module';
import { InlineMessageComponent } from './inline-message.component';

@NgModule({
  declarations: [InlineMessageComponent],
  imports: [
    CommonModule,
    InlineMessageRoutingModule,
    ForgeInlineMessageModule,
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class InlineMessageModule { }
