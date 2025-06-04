import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ButtonToggleGroupValueAccessor),
  multi: true
};

@Directive({
    selector: 'forge-button-toggle-group[formControlName],forge-button-toggle-group[formControl],forge-button-toggle-group[ngModel]',
    providers: [BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
    standalone: false
})
export class ButtonToggleGroupValueAccessor implements ControlValueAccessor {
  @HostListener('forge-button-toggle-group-change', ['$event'])
  public buttonToggleGroupChange(event: CustomEvent): void {
    this.change(event.detail);
  }

  @HostListener('focusout')
  public blur(): void {
    this.onTouched();
  }

  public onChange = (_: any): void => {};
  public onTouched = (): void => {};

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  public writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
  }

  public registerOnChange(fn: (_: number | null) => void): void {
    this.onChange = value => fn(value === '' ? null : value);
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  public change(value: number): void {
    this.onChange(value);
  }
}
