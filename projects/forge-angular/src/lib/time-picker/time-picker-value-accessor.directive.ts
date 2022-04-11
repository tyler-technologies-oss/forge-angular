import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ITimePickerComponent } from '@tylertech/forge';

export const TIME_PICKER_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePickerValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-time-picker[formControlName],forge-time-picker[formControl],forge-time-picker[ngModel]',
  providers: [TIME_PICKER_VALUE_ACCESSOR]
})
export class TimePickerValueAccessor implements ControlValueAccessor {
  @HostListener('forge-time-picker-change', ['$event'])
  public timePickerChange(event: CustomEvent<string>) {
    this.change(event.detail);
  }

  @HostListener('focusout', ['$event'])
  public blur(event: Event) {
    this.onTouched();
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  constructor(private _elementRef: ElementRef<ITimePickerComponent>, private _renderer: Renderer2) {}

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
