import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpansionPanelExamplesComponent } from './expansion-panel-examples.component';

const routes: Routes = [
  { path: '', component: ExpansionPanelExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpansionPanelExamplesRoutingModule {}
