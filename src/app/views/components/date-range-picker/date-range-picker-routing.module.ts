import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateRangePickerComponent } from './date-range-picker.component';

const routes: Routes = [
  { path: '', component: DateRangePickerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateRangePickerRoutingModule { }
