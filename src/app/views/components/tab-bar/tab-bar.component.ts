import { Component } from '@angular/core';
import { DemoCardComponent } from '../../../components/demo-card/demo-card.component';
import { ForgeTabBarModule, ForgeTabModule } from '@tylertech/forge-angular';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-tab-bar',
    templateUrl: './tab-bar.component.html',
    imports: [DemoCardComponent, ForgeTabBarModule, ForgeTabModule, NgSwitch, NgSwitchCase]
})
export class TabBarComponent {
  public selectedTab = 1;
}
