import { Component } from '@angular/core';

@Component({
    selector: 'app-tab-bar',
    templateUrl: './tab-bar.component.html',
    standalone: false
})
export class TabBarComponent {
  public selectedTab = 1;
}
