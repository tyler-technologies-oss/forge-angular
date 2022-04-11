import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuantityFieldComponent } from './quantity-field.component';

const routes: Routes = [
  { path: '', component: QuantityFieldComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuantityFieldRoutingModule { }
