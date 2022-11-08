import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { ForgeIconModule } from '@tylertech/forge-angular';
import { tylIcon360, tylIconFace } from '@tylertech/tyler-icons/standard';
import { tylIconActionLauncher } from '@tylertech/tyler-icons/custom';

import { IconRoutingModule } from './icon-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { IconComponent } from './icon.component';

defineIconComponent();

IconRegistry.define([
  tylIconFace
]);

// Delayed icons
setTimeout(() => {
  IconRegistry.define([
    tylIcon360,
    tylIconActionLauncher
  ]);
}, 3000);
@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    IconRoutingModule,
    SharedModule,
    ForgeIconModule
  ]
})
export class IconModule { }
