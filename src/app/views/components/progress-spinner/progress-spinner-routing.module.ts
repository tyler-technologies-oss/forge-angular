import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressSpinnerComponent } from './progress-spinner.component';

const routes: Routes = [
  { path: '', component: ProgressSpinnerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressSpinnerRoutingModule { }
