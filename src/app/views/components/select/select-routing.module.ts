import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectComponent } from './select.component';

const routes: Routes = [
  { path: '', component: SelectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectRoutingModule {}
