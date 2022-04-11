import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineTabBarComponent } from '@tylertech/forge';

import { SharedModule } from '../../../shared/shared.module';
import { TabBarRoutingModule } from './tab-bar-routing.module';
import { TabBarComponent } from './tab-bar.component';

defineTabBarComponent();

@NgModule({
  declarations: [TabBarComponent],
  imports: [
    CommonModule,
    TabBarRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabBarModule { }
