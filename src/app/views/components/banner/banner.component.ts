import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public isDismissed: boolean = false;

  constructor(public cdRef: ChangeDetectorRef) { }

  public ngOnInit(): void { }

  public openAlert() {
    alert('Some more info...');
    this.dismissBanner();
  }

  public toggleBanner() {
    this.isDismissed = !this.isDismissed;
  }

  public dismissBanner() {
    this.isDismissed = true;
  }

  public undismissBanner() {
    this.isDismissed = false;
  }
}
