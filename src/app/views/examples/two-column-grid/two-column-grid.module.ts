import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  defineCardComponent,
  defineBadgeComponent,
  defineScaffoldComponent,
  defineToolbarComponent,
  defineButtonComponent,
  defineFilePickerComponent,
  defineMenuComponent,
} from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { TwoColumnGridRoutingModule } from './two-column-grid.routing-module';
import { TwoColumnGridComponent } from './two-column-grid.component';

defineCardComponent();
defineBadgeComponent();
defineScaffoldComponent();
defineToolbarComponent();
defineButtonComponent();
defineFilePickerComponent();
defineMenuComponent();

@NgModule({
  declarations: [TwoColumnGridComponent],
  imports: [
    CommonModule,
    SharedModule,
    TwoColumnGridRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwoColumnGridModule { }
