import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextFieldComponent } from './text-field.component';

const routes: Routes = [
  { path: '', component: TextFieldComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextFieldRoutingModule {}
