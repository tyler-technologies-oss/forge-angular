import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchComponent } from './switch.component';

const routes: Routes = [
  { path: '', component: SwitchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchRoutingModule {}
