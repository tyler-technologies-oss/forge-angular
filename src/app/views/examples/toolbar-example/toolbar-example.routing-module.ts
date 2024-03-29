import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarExampleComponent } from './toolbar-example.component';

const routes: Routes = [
  { path: '', component: ToolbarExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolbarExampleRoutingModule {}
