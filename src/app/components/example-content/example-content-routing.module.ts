import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleContentComponent } from './example-content.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ExampleContentComponent },
  { path: 'expansion-panel', loadChildren: () => import('../../views/examples/expansion-panel-examples/expansion-panel-examples.module').then(m => m.ExpansionPanelExamplesModule) },
  { path: 'toolbar-example', loadChildren: () => import('../../views/examples/toolbar-example/toolbar-example.module').then(m => m.ToolbarExampleModule) },
  { path: 'two-column-grid', loadChildren: () => import('../../views/examples/two-column-grid/two-column-grid.module').then(m => m.TwoColumnGridModule) },
  { path: 'reactive-form', loadChildren: () => import('../../views/examples/reactive-form-example/reactive-form-example.module').then(m => m.ReactiveFormExampleModule) },
  { path: 'table', loadChildren: () => import('../../views/examples/table-example/table-example.module').then(m => m.TableExampleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleContentRoutingModule { }
