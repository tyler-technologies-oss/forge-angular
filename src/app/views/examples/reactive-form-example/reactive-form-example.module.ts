import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ForgeAutocompleteModule, ForgeChipModule, ForgeDatePickerModule, ForgeSelectModule, ForgeSliderModule, ForgeSwitchModule, ForgeTimePickerModule, ProxyComponentsModule
} from '@tylertech/forge-angular';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormExampleRoutingModule } from './reactive-form-example-routing.module';
import { ReactiveFormExampleComponent } from './reactive-form-example.component';

@NgModule({
  declarations: [ReactiveFormExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReactiveFormExampleRoutingModule,
    ForgeAutocompleteModule,
    ForgeSliderModule,
    ForgeSelectModule,
    ForgeDatePickerModule,
    ForgeChipModule,
    ForgeTimePickerModule,
    ForgeSwitchModule,
    ProxyComponentsModule
  ]
})
export class ReactiveFormExampleModule {}
