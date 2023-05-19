import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconRegistry } from '@tylertech/forge';
import {
  ForgeAutocompleteModule, ForgeButtonModule, ForgeCheckboxModule, ForgeChipModule, ForgeChipSetModule, ForgeDatePickerModule, ForgeIconButtonModule, ForgeIconModule, ForgeQuantityFieldModule, ForgeRadioModule, ForgeSelectModule, ForgeSliderModule, ForgeSwitchModule, ForgeTextFieldModule, ForgeTimePickerModule
} from '@tylertech/forge-angular';
import { tylIconAddCircleOutline, tylIconRemoveCircleOutline } from '@tylertech/tyler-icons/standard';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { ReactiveFormExampleRoutingModule } from './reactive-form-example-routing.module';
import { ReactiveFormExampleComponent } from './reactive-form-example.component';

@NgModule({
  declarations: [ReactiveFormExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormExampleRoutingModule,
    ForgeAutocompleteModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeChipSetModule,
    ForgeChipModule,
    ForgeDatePickerModule,
    ForgeIconButtonModule,
    ForgeQuantityFieldModule,
    ForgeRadioModule,
    ForgeSelectModule,
    ForgeSliderModule,
    ForgeSwitchModule,
    ForgeTextFieldModule,
    ForgeTimePickerModule,
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class ReactiveFormExampleModule {
  constructor() {
    IconRegistry.define([
      tylIconAddCircleOutline,
      tylIconRemoveCircleOutline
    ]);
  }
}
