import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineMessageComponent } from './inline-message.component';


const routes: Routes = [
  { path: '', component: InlineMessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InlineMessageRoutingModule { }
