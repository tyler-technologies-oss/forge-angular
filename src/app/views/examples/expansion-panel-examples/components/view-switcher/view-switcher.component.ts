import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ev-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.scss'],
})
export class ViewSwitcherDemoComponent implements OnInit {
  @Input() public user: any;
  constructor() { }

  public currentIndex = 0;

  public listItems = [
    { label: 'Account', icon: 'payment' },
    { label: 'Past bills', icon: 'pageview' },
  ];

  public ngOnInit(): void {
    console.log(this.user);

  }

  public tabClicked(evt: number) {
    this.currentIndex = evt;
  }
}
