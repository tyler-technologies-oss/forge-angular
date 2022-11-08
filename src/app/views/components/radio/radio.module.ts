import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeRadioModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { RadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent],
  imports: [
    CommonModule,
    RadioRoutingModule,
    FormsModule,
    SharedModule,
    ForgeRadioModule
  ]
})
export class RadioModule { }
