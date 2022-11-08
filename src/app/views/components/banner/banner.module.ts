import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { SharedModule } from '../../../shared/shared.module';
import { ForgeBannerModule, ForgeButtonModule } from '@tylertech/forge-angular';


@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    SharedModule,
    ForgeBannerModule,
    ForgeButtonModule
  ],
})
export class BannerModule { }
