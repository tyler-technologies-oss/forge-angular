import { AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Component({
  selector: '[forgeButtonBusy]',
  templateUrl: './button-busy.component.html',
  styleUrls: ['./button-busy.component.scss']
})
export class ButtonBusyComponent implements AfterViewInit {
  @Input('forgeButtonBusy')
  get isBusy(): boolean {
    return this._isBusy;
  };
  set isBusy(value: boolean) {
    this._applyBusy(value)
  }
  @Input('forgeAutoDisable') autoDisable = true;
  @Input('forgeFixedWidth') fixedWidth = true;
  @HostBinding('attr.disabled') get isDisabled() {
    return this._setDisabled();
  }

  private _isBusy = false;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef<HTMLElement>) {}

  public ngAfterViewInit(): void {
    this._setAriaLabel();
  }

  private _setDisabled(): string | null {
    if (this.autoDisable) {
      return this.isBusy ? 'true' : null;
    } else {
      return this._elementRef.nativeElement?.hasAttribute('disabled') ? 'true' : null;
    }
  }

  private _applyBusy(value: boolean): void {
    if (!this._elementRef.nativeElement) {
      this._isBusy = value;
      return;
    }

    // Maintain the button width while showing the busy indicator
    if (value && this.fixedWidth) {
      const computedStyle = getComputedStyle(this._elementRef.nativeElement);
      let contentWidth = this._elementRef.nativeElement.clientWidth;
      contentWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
      this._renderer.setStyle(this._elementRef.nativeElement, '--forge-button-busy-width', `${contentWidth}px`, 2);
    } else {
      this._renderer.removeStyle(this._elementRef.nativeElement, '--forge-button-busy-width', 2);
    }
    this._isBusy = value;
  }

  private _setAriaLabel(): void {
    // Try to set the aria label only if there isn't already one
    if (!this._elementRef.nativeElement || this._elementRef.nativeElement.hasAttribute('aria-label')) {
      return;
    }

    const innerText = this._elementRef.nativeElement.innerText;
    if (innerText) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-label', innerText);
    }
  }
}
