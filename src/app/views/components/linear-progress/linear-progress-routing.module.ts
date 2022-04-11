import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinearProgressComponent } from './linear-progress.component';

const routes: Routes = [
  { path: '', component: LinearProgressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinearProgressRoutingModule {}
