import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircularProgressComponent } from './circular-progress.component';

const routes: Routes = [
  { path: '', component: CircularProgressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircularProgressRoutingModule { }
