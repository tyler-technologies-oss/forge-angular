import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusyIndicatorComponent } from './busy-indicator.component';

const routes: Routes = [
  { path: '', component: BusyIndicatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusyIndicatorRoutingModule {}
