import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineAvatarComponent } from '@tylertech/forge';

import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './avatar.component';
import { SharedModule } from '../../../shared/shared.module';

defineAvatarComponent();

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    AvatarRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvatarModule { }
