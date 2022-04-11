import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineViewSwitcherComponent, defineTabBarComponent, defineButtonComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { ViewSwitcherRoutingModule } from './view-switcher-routing.module';
import { ViewSwitcherComponent } from './view-switcher.component';

defineViewSwitcherComponent();
defineTabBarComponent();
defineButtonComponent();

@NgModule({
  declarations: [ViewSwitcherComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViewSwitcherRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewSwitcherModule { }
