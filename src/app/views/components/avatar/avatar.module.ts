import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeAvatarModule, ForgeButtonModule } from '@tylertech/forge-angular';

import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './avatar.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    AvatarRoutingModule,
    SharedModule,
    ForgeAvatarModule,
    ForgeButtonModule
  ]
})
export class AvatarModule { }
