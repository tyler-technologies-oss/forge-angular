import { Component } from '@angular/core';
import { MediaObserver } from './shared/media-observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDrawerOpen = true;

  constructor() {
    const prefersColorScheme = MediaObserver.observe('orientation');
    console.log(prefersColorScheme.value);
    prefersColorScheme.subscribe(value => console.log(value));
  }

  public onMenuClicked(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
