import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatePickerComponent } from './date-picker.component';

const routes: Routes = [
  { path: '', component: DatePickerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatePickerRoutingModule {}
