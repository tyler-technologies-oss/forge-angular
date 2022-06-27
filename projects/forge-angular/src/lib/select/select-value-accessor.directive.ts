import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelectComponent } from '@tylertech/forge/esm/select';

export const SELECT_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-select[formControlName],forge-select[formControl],forge-select[ngModel]',
  providers: [SELECT_VALUE_ACCESSOR]
})
export class SelectValueAccessor implements ControlValueAccessor {
  @HostListener('change', ['$event'])
  public selectChange(event: Event) {
    this.change((event.target as ISelectComponent).value);
  }

  @HostListener('blur', ['$event'])
  public blur(event: Event) {
    this.onTouched();
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  public writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
  }

  public registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  public change(value: string| string[]): void {
    this.onChange(value);
  }
}
