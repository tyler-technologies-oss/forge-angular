import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDatePickerComponent } from '@tylertech/forge';

export const DATEPICKER_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-date-picker[formControlName],forge-date-picker[formControl],forge-date-picker[ngModel]',
  providers: [DATEPICKER_VALUE_ACCESSOR]
})
export class DatePickerValueAccessor implements ControlValueAccessor {
  @HostListener('forge-date-picker-change', ['$event'])
  public datePickerChange(event: CustomEvent) {
    this.change(event.detail);
  }

  @HostListener('focusout', ['$event'])
  public blur(event: Event) {
    this.onTouched();
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  constructor(private _elementRef: ElementRef<IDatePickerComponent>, private _renderer: Renderer2) {}

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

  public change(value: string | Date): void {
    this.onChange(value);
  }
}
