import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineSliderComponent } from '@tylertech/forge';
import { FormsModule } from '@angular/forms';
import { ForgeSliderModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';

defineSliderComponent();

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    SliderRoutingModule,
    SharedModule,
    FormsModule,
    ForgeSliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderModule { }
