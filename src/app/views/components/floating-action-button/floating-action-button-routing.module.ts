import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingActionButtonComponent } from './floating-action-button.component';

const routes: Routes = [
  { path: '', component: FloatingActionButtonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingActionButtonRoutingModule {}
