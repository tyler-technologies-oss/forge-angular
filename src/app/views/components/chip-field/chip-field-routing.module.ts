import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChipFieldComponent } from './chip-field.component';

const routes: Routes = [
  { path: '', component: ChipFieldComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChipFieldRoutingModule { }
