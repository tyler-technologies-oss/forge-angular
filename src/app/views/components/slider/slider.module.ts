import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeSliderModule, ForgeSliderProxyModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';


@NgModule({
    imports: [
        CommonModule,
        SliderRoutingModule,
        FormsModule,
        ForgeSliderModule,
        ForgeSliderProxyModule,
        DemoCardComponent,
        SliderComponent
    ]
})
export class SliderModule { }
