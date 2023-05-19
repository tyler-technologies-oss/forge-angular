import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { ForgeIconModule } from '@tylertech/forge-angular';
import { tylIconActionLauncher } from '@tylertech/tyler-icons/custom';
import { tylIcon360, tylIconFace } from '@tylertech/tyler-icons/standard';

import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { IconRoutingModule } from './icon-routing.module';
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
    ForgeIconModule,
    DemoCardComponent
  ]
})
export class IconModule { }
