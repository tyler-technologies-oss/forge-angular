import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  defineCardComponent,
  defineBadgeComponent,
  defineScaffoldComponent,
  defineLabelValueComponent,
  defineToolbarComponent,
  definePaginatorComponent
} from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { ToolbarExampleRoutingModule } from './toolbar-example.routing-module';
import { ToolbarExampleComponent } from './toolbar-example.component';

defineCardComponent();
defineBadgeComponent();
defineScaffoldComponent();
defineLabelValueComponent();
defineToolbarComponent();
definePaginatorComponent();

@NgModule({
  declarations: [ToolbarExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ToolbarExampleRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarExampleModule {}
