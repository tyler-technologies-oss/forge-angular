import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitViewComponent } from './split-view.component';

const routes: Routes = [
  { path: '', component: SplitViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule {}
