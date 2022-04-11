import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageStateComponent } from './page-state.component';

const routes: Routes = [
  { path: '', component: PageStateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageStateRoutingModule { }
