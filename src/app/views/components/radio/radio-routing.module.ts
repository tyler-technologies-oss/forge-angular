import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioComponent } from './radio.component';

const routes: Routes = [
  { path: '', component: RadioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioRoutingModule {}
