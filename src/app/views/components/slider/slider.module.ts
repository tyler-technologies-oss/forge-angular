import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeSliderModule, ForgeSliderProxyModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';


@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    SliderRoutingModule,
    SharedModule,
    FormsModule,
    ForgeSliderModule,
    ForgeSliderProxyModule
  ]
})
export class SliderModule { }
