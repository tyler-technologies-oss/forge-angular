import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconButtonComponent } from './icon-button.component';

const routes: Routes = [
  { path: '', component: IconButtonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconButtonRoutingModule {}
