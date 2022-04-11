import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'component', loadChildren: () => import('./components/component-demo/component-demo.module').then(m => m.ComponentDemoModule) },
  { path: 'example', loadChildren: () => import('./components/example-content/example-content.module').then(m => m.ExampleContentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
