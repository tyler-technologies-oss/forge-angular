import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { startWith, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[forgeFormValidity]'
})
export class FormValidityDirective implements AfterViewInit, OnDestroy {
  @Input('forgeFormControl') public control: AbstractControl | null;
  @HostListener('focusout') public onBlur(): void {
    this._onBlur();
  }
  @HostListener('keydown') public onKeyDown(): void {
    this._onKeydown();
  }

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    this._observeValidity();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _onBlur(): void {
    // Wait one frame for the control to get marked as touched
    window.requestAnimationFrame(() => {
      this._updateValidity();
    });
  }

  private _onKeydown(): void {
    // Wait one frame for the control to update
    window.requestAnimationFrame(() => {
      if (this.control?.touched) {
        this._updateValidity();
      }
    });
  }

  private _observeValidity(): void {
    this.control?.statusChanges
      .pipe(startWith(this.control.status), takeUntil(this._destroy$))
      .subscribe(() => {
        this._setRequired();
        this._updateValidity();
      })
  }

  private _setRequired(): void {
    if (!this.control?.validator) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'required', false);
      return;
    }

    const validator = this.control.validator({} as AbstractControl);
    const required = validator && validator['required'];
    this._renderer.setProperty(this._elementRef.nativeElement, 'required', required);
  }

  private _updateValidity(): void {
    const invalid = this.control?.invalid && this.control?.touched;
    this._renderer.setProperty(this._elementRef.nativeElement, 'invalid', invalid);
  }
}
