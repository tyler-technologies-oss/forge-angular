import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoColumnGridComponent } from './two-column-grid.component';

const routes: Routes = [
  { path: '', component: TwoColumnGridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoColumnGridRoutingModule { }
