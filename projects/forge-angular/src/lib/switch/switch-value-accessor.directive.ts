import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const SWITCH_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-switch[formControlName],forge-switch[formControl],forge-switch[ngModel]',
  providers: [SWITCH_VALUE_ACCESSOR]
})
export class SwitchValueAccessor implements ControlValueAccessor {
  @HostListener('forge-switch-select', ['$event'])
  public switchChange(evt: CustomEvent<boolean>): void {
    this.change(evt.detail);
  }

  @HostListener('blur')
  public blur(): void {
    this.onTouched();
  }

  public onChange = (_: any): void => {};
  public onTouched = (): void => {};

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  public writeValue(value: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'selected', !!value);
  }

  public registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = value => fn(value);
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(value: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', value);
  }

  public change(value: boolean): void {
    this.onChange(value);
  }
}
