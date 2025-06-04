import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgePopoverModule, ForgePopoverProxyModule, ForgeTextFieldModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverComponent } from './popover.component';

@NgModule({
    imports: [
        CommonModule,
        PopoverRoutingModule,
        FormsModule,
        ForgeButtonModule,
        ForgePopoverModule,
        ForgePopoverProxyModule,
        ForgeTextFieldModule,
        DemoCardComponent,
        PopoverComponent
    ]
})
export class PopoverModule {}
