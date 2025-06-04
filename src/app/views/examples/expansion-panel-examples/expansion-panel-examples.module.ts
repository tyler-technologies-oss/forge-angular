import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { ForgeCardModule, ForgeCheckboxModule, ForgeExpansionPanelModule, ForgeIconButtonModule, ForgeIconModule, ForgeLabelValueModule, ForgePageStateModule, ForgeScaffoldModule, ForgeTabBarModule, ForgeToolbarModule, ForgeTooltipModule, ForgeViewSwitcherModule } from '@tylertech/forge-angular';
import { tylIconGetApp, tylIconMoreVert, tylIconSearch, tylIconShare } from '@tylertech/tyler-icons/standard';

// Modules
import { DemoCardComponent } from 'src/app/shared/components/demo-card/demo-card.component';
import { ViewSwitcherDemoComponent } from './components/view-switcher/view-switcher.component';
import { ExpansionPanelExamplesRoutingModule } from './expansion-panel-examples-routing.module';
import { ExpansionPanelExamplesComponent } from './expansion-panel-examples.component';

@NgModule({
    imports: [
        ExpansionPanelExamplesRoutingModule,
        CommonModule,
        ForgeCardModule,
        ForgeCheckboxModule,
        ForgeExpansionPanelModule,
        ForgeIconButtonModule,
        ForgeLabelValueModule,
        ForgePageStateModule,
        ForgeScaffoldModule,
        ForgeTabBarModule,
        ForgeToolbarModule,
        ForgeViewSwitcherModule,
        ForgeIconModule,
        ForgeTooltipModule,
        DemoCardComponent,
        ExpansionPanelExamplesComponent, ViewSwitcherDemoComponent
    ]
})
export class ExpansionPanelExamplesModule {
  constructor() {
    IconRegistry.define([
      tylIconGetApp,
      tylIconMoreVert,
      tylIconSearch,
      tylIconShare
    ]);
  }
}
