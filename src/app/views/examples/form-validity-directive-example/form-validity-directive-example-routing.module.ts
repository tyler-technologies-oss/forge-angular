import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidityDirectiveExampleComponent } from './form-validity-directive-example.component';

const routes: Routes = [
  { path: '', component: FormValidityDirectiveExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidityDirectiveExampleRoutingModule {}
