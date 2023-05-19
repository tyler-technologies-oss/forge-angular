import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDrawerOpen = true;

  public onMenuClicked(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
