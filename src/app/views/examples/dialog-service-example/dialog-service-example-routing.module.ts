import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogServiceExampleComponent } from './dialog-service-example.component';

const routes: Routes = [
  { path: '', component: DialogServiceExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogServiceExampleRoutingModule {}
