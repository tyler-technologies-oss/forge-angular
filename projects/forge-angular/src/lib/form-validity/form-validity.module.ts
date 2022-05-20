import { NgModule } from '@angular/core';

import { FormValidityDirective } from './form-validity.directive';


@NgModule({
  declarations: [
    FormValidityDirective
  ],
  exports: [
    FormValidityDirective
  ]
})
export class FormValidityModule {}
