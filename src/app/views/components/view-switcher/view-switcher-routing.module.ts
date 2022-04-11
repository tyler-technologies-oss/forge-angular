import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSwitcherComponent } from './view-switcher.component';

const routes: Routes = [
  { path: '', component: ViewSwitcherComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSwitcherRoutingModule { }
