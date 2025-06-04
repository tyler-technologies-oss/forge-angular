import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconAddAlert } from '@tylertech/tyler-icons/standard';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: false
})
export class BannerComponent {
  public isDismissed = false;

  constructor() {
    IconRegistry.define(tylIconAddAlert);
  }

  public openAlert(): void {
    alert('Some more info...');
    this.dismissBanner();
  }

  public toggleBanner(): void {
    this.isDismissed = !this.isDismissed;
  }

  public dismissBanner(): void {
    this.isDismissed = true;
  }
}
