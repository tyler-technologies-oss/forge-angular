import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgeBannerModule, ForgeButtonModule, ForgeIconModule } from '@tylertech/forge-angular';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';


@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    ForgeBannerModule,
    ForgeButtonModule,
    ForgeIconModule,
    DemoCardComponent
  ],
})
export class BannerModule { }
