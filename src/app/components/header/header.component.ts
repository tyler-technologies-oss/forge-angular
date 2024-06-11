import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ToastService } from '@tylertech/forge-angular';
import { IAppBarSearchInputEventData, IconRegistry } from '@tylertech/forge';
import { toggleClass } from '@tylertech/forge-core';
import { tylIconTylerTalkingTLogo } from '@tylertech/tyler-icons/custom';
import { tylIconBrightness3 } from '@tylertech/tyler-icons/extended';
import { tylIconWbSunny } from '@tylertech/tyler-icons/standard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private _isDark = false;
  public themeSwitcherIcon: string = tylIconBrightness3.name;

  @Input() public showDrawerToggle = false;

  @Output()
  public menuClicked = new EventEmitter<void>();

  constructor(private _toastService: ToastService) {
    IconRegistry.define([
      tylIconTylerTalkingTLogo,
      tylIconWbSunny,
      tylIconBrightness3
    ]);
  }

  public onMenuClicked(): void {
    this.menuClicked.next();
  }

  public onSearch(evt: CustomEvent<IAppBarSearchInputEventData>): void {
    this._toastService.show(`Search: ${evt.detail}`);
  }

  public toggleTheme(): void {
    this._isDark = !this._isDark;
    toggleClass(document.body, this._isDark, 'app-theme-dark');
    this.themeSwitcherIcon = this._isDark ? tylIconWbSunny.name : tylIconBrightness3.name;
  }
}
