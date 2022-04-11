import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleContentRoutingModule } from './example-content-routing.module';
import { ExampleContentComponent } from './example-content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ExampleContentComponent],
  imports: [
    CommonModule,
    ExampleContentRoutingModule,
    HttpClientModule
  ]
})
export class ExampleContentModule {}
