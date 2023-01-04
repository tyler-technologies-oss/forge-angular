import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeSelectModule, ForgeSelectProxyModule} from '@tylertech/forge-angular';
import { ForgeSplitViewModule, ForgeSplitViewPanelModule } from 'projects/forge-angular/src/public-api';

import { SharedModule } from '../../../shared/shared.module';
import { StepperRoutingModule } from './split-view-routing.module';
import { SplitViewComponent } from './split-view.component';

@NgModule({
  declarations: [SplitViewComponent],
  imports: [
    CommonModule,
    StepperRoutingModule,
    FormsModule,
    SharedModule,
    ForgeButtonModule,
    ForgeCheckboxModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
    ForgeSplitViewModule,
    ForgeSplitViewPanelModule
  ]
})
export class SplitViewModule {}
