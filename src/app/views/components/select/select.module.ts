import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgeOptionModule, ForgeSelectModule, ForgeSelectProxyModule } from '@tylertech/forge-angular';

import { SharedModule } from '../../../shared/shared.module';
import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    SelectRoutingModule,
    FormsModule,
    SharedModule,
    ForgeOptionModule,
    ForgeSelectModule,
    ForgeSelectProxyModule,
  ]
})
export class SelectModule {}
