import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeInlineMessageModule } from '@tylertech/forge-angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { InlineMessageRoutingModule } from './inline-message-routing.module';
import { InlineMessageComponent } from './inline-message.component';

@NgModule({
  declarations: [InlineMessageComponent],
  imports: [
    CommonModule,
    InlineMessageRoutingModule,
    SharedModule,
    ForgeInlineMessageModule
  ]
})
export class InlineMessageModule { }
