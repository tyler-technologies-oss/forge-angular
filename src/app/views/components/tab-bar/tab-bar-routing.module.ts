import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarComponent } from './tab-bar.component';

const routes: Routes = [
  { path: '', component: TabBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabBarRoutingModule {}
