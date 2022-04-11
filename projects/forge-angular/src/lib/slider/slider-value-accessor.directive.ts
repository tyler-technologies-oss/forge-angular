import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const SLIDER_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SliderValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-slider[formControlName],forge-slider[formControl],forge-slider[ngModel]',
  providers: [SLIDER_VALUE_ACCESSOR]
})
export class SliderValueAccessor implements ControlValueAccessor {
  @HostListener('forge-slider-change', ['$event'])
  public sliderChange(event: CustomEvent) {
    this.change(event.detail.value);
  }

  @HostListener('forge-slider-input', ['$event'])
  public sliderInput(event: CustomEvent) {
    this.change(event.detail.value);
  }

  @HostListener('blur', ['$event'])
  public blur(event: Event) {
    this.onTouched();
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  public writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', this._toFloat(value));
  }

  public registerOnChange(fn: (_: number | null) => void): void {
    this.onChange = value => fn(value === '' ? null : this._toFloat(value));
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

  private _toFloat(value: any): number {
    if (value === null || value === undefined) {
      return 0;
    }

    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue) || typeof parsedValue !== 'number') {
      return 0;
    }

    return parsedValue;
  }
}
