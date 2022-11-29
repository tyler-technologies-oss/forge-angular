import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitViewRoutingModule } from './split-view-routing.module';
import { SplitViewComponent } from './split-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { defineLabelValueComponent, defineSplitViewComponent } from '@tylertech/forge';

defineSplitViewComponent();
defineLabelValueComponent();

@NgModule({
  declarations: [SplitViewComponent],
  imports: [
    CommonModule,
    SplitViewRoutingModule,
    FormsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SplitViewModule {}
