import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IChipComponent } from '@tylertech/forge';

export const CHIP_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChipValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-chip[value][formControlName],forge-chip[value][formControl],forge-chip[value][ngModel]',
  providers: [CHIP_VALUE_ACCESSOR]
})
export class ChipValueAccessor implements ControlValueAccessor {
  @HostListener('forge-chip-select', ['$event'])
  public chipSelect(event: CustomEvent) {
    this.change(event.detail.value);
  }

  @HostListener('blur', ['$event'])
  public blur(event: Event) {
    this.onTouched();
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  constructor(private _elementRef: ElementRef<IChipComponent>, private _renderer: Renderer2) {}

  public writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'selected', this._elementRef.nativeElement.value === value);
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

  public change(value: any): void {
    this.onChange(value);
  }
}
