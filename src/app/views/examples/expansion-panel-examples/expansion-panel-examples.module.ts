import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Modules
import { ExpansionPanelExamplesRoutingModule } from './expansion-panel-examples-routing.module';
import { ExpansionPanelExamplesComponent } from './expansion-panel-examples.component';
import { defineToolbarComponent, defineExpansionPanelComponent, defineOpenIconComponent, defineLabelValueComponent, defineIconButtonComponent, defineCheckboxComponent, defineViewSwitcherComponent, defineTabBarComponent, definePageStateComponent } from '@tylertech/forge';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ViewSwitcherDemoComponent } from './components/view-switcher/view-switcher.component';

defineToolbarComponent();
defineExpansionPanelComponent();
defineOpenIconComponent();
defineLabelValueComponent();
defineIconButtonComponent();
defineCheckboxComponent();
defineViewSwitcherComponent();
defineTabBarComponent();
defineLabelValueComponent();
definePageStateComponent();

@NgModule({
  declarations: [ExpansionPanelExamplesComponent, ViewSwitcherDemoComponent],
  imports: [ExpansionPanelExamplesRoutingModule, SharedModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExpansionPanelExamplesModule {}
