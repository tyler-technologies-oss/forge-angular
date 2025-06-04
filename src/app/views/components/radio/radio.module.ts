import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeRadioModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { RadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio.component';

@NgModule({
    imports: [
        CommonModule,
        RadioRoutingModule,
        FormsModule,
        ForgeRadioModule,
        DemoCardComponent,
        RadioComponent
    ]
})
export class RadioModule { }
