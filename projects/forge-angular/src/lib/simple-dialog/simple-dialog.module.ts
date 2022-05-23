import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y'
import { defineButtonComponent, defineIconButtonComponent, defineIconComponent, defineScaffoldComponent, defineToolbarComponent, defineTooltipComponent, IconRegistry } from '@tylertech/forge';
import { tylIconClose } from '@tylertech/tyler-icons/standard';

import { CommonModule } from '@angular/common';
import { AutofocusModule } from '@tylertech/angular-core';

import { ForgeSimpleDialogComponent } from './simple-dialog.component';

@NgModule({
  declarations: [ForgeSimpleDialogComponent],
  exports: [ForgeSimpleDialogComponent],
  imports: [CommonModule, A11yModule, AutofocusModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ForgeSimpleDialogModule {
  constructor() {
    defineButtonComponent();
    defineIconButtonComponent();
    defineIconComponent();
    defineScaffoldComponent();
    defineToolbarComponent();
    defineTooltipComponent();

    IconRegistry.define([
      tylIconClose
    ]);
  }
}
