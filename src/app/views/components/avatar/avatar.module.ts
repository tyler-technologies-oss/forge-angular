import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeAvatarModule, ForgeButtonModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './avatar.component';

@NgModule({
    imports: [
        CommonModule,
        AvatarRoutingModule,
        ForgeAvatarModule,
        ForgeButtonModule,
        DemoCardComponent,
        AvatarComponent
    ]
})
export class AvatarModule { }
