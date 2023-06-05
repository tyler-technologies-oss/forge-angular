import { NgModule } from '@angular/core';

import { ForgeListProxyModule } from './list-proxy.module';
import { ListValueAccessor } from './list-value-accessor.directive';

@NgModule({
	declarations: [
    ListValueAccessor
  ],
	exports: [
    ListValueAccessor,
    ForgeListProxyModule
  ]
})
export class ForgeListModule {
}
