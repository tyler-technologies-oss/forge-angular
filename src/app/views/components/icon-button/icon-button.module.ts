import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineIconButtonComponent } from '@tylertech/forge';
import { ForgeButtonModule, ForgeIconButtonModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { IconButtonRoutingModule } from './icon-button-routing.module';
import { IconButtonComponent } from './icon-button.component';

defineIconButtonComponent();

@NgModule({
    imports: [
        CommonModule,
        IconButtonRoutingModule,
        ForgeButtonModule,
        ForgeIconButtonModule,
        DemoCardComponent,
        IconButtonComponent
    ]
})
export class IconButtonModule {}
