import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { ForgeCardModule, ForgeCheckboxModule, ForgeExpansionPanelModule, ForgeIconButtonModule, ForgeLabelValueModule, ForgeOpenIconModule, ForgePageStateModule, ForgeScaffoldModule, ForgeTabBarModule, ForgeTabModule, ForgeToolbarModule, ForgeViewModule, ForgeViewSwitcherModule } from '@tylertech/forge-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewSwitcherDemoComponent } from './components/view-switcher/view-switcher.component';
import { ExpansionPanelExamplesRoutingModule } from './expansion-panel-examples-routing.module';
import { ExpansionPanelExamplesComponent } from './expansion-panel-examples.component';

@NgModule({
  declarations: [ExpansionPanelExamplesComponent, ViewSwitcherDemoComponent],
  imports: [
    ExpansionPanelExamplesRoutingModule,
    SharedModule,
    CommonModule,
    ForgeCardModule,
    ForgeCheckboxModule,
    ForgeExpansionPanelModule,
    ForgeIconButtonModule,
    ForgeLabelValueModule,
    ForgeOpenIconModule,
    ForgePageStateModule,
    ForgeScaffoldModule,
    ForgeTabBarModule,
    ForgeTabModule,
    ForgeToolbarModule,
    ForgeViewSwitcherModule,
    ForgeViewModule
  ]
})
export class ExpansionPanelExamplesModule {}
