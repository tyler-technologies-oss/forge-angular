import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonBusyExampleComponent } from './button-busy-example.component';

const routes: Routes = [
  { path: '', component: ButtonBusyExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonBusyExampleRoutingModule {}
