import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderComponent } from './slider.component';

const routes: Routes = [
  { path: '', component: SliderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule {}
