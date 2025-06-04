import { Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IAppBarComponent } from '@tylertech/forge';

@Directive({
    selector: 'forge-app-bar[href]',
    standalone: false
})
export class AppBarRouterNavigateDirective {
  private _listener: (evt: CustomEvent<void>) => void = this._onNavigate.bind(this);

  constructor(private _elementRef: ElementRef<IAppBarComponent>, private _router: Router) {}

  public ngOnInit(): void {
    this._elementRef.nativeElement.addEventListener('forge-app-bar-navigate' as any, this._listener);
  }

  private _onNavigate(event: CustomEvent<void>): void {
    const target = event.target as HTMLAnchorElement;
    if (!target.href) {
      return;
    }
    event.preventDefault();
    this._router.navigate([target.href]);
  }
}
