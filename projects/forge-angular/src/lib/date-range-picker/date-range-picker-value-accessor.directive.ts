import { Directive, ElementRef, forwardRef, HostListener, Renderer2, StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDatePickerRange } from '@tylertech/forge';

export const DATE_RANGE_PICKER_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateRangePickerValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-date-range-picker[formControlName],forge-date-range-picker[formControl],forge-date-range-picker[ngModel]',
  providers: [DATE_RANGE_PICKER_VALUE_ACCESSOR]
})
export class DateRangePickerValueAccessor implements ControlValueAccessor {
  @HostListener('forge-date-range-picker-change', ['$event'])
  public dateRangePickerChange(event: CustomEvent) {
    this.change(event.detail);
  }

  @HostListener('focusout', ['$event'])
  public blur(event: Event) {
    this.onTouched();
  }

  public onChange = (_: any) => { };
  public onTouched = () => { };

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

  public change(value: IDatePickerRange): void {
    this.onChange(value);
  }
}
