import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormExampleComponent } from './reactive-form-example.component';

const routes: Routes = [
  { path: '', component: ReactiveFormExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormExampleRoutingModule {}
