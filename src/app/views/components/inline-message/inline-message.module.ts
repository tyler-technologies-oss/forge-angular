import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineMessageRoutingModule } from './inline-message-routing.module';
import { InlineMessageComponent } from './inline-message.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { defineInlineMessageComponent } from '@tylertech/forge';

defineInlineMessageComponent();

@NgModule({
  declarations: [InlineMessageComponent],
  imports: [
    CommonModule,
    InlineMessageRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InlineMessageModule { }
