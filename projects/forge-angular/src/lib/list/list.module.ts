import { NgModule } from '@angular/core';

import { ListValueAccessor } from 'projects/forge-angular/src/lib/list/list-value-accessor.directive';
import { ForgeListProxyModule } from './list-proxy.module';

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
