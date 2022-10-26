import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgeCardModule } from '@tylertech/forge-angular';

import { DemoCardComponent } from './components/demo-card/demo-card.component';

@NgModule({
  declarations: [
    DemoCardComponent
  ],
  imports: [
    CommonModule,
    ForgeCardModule
  ],
  exports: [
    DemoCardComponent
  ]
})
export class SharedModule {}
