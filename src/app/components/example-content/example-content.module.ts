import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleContentRoutingModule } from './example-content-routing.module';
import { ExampleContentComponent } from './example-content.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [ExampleContentComponent],
  imports: [
    CommonModule,
    ExampleContentRoutingModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ExampleContentModule {}
