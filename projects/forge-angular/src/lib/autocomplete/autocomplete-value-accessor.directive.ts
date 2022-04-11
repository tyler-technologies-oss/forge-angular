import { Directive, Renderer2, ElementRef, forwardRef, HostListener } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IOption } from '@tylertech/forge';

export const AUTOCOMPLETE_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-autocomplete[formControlName],forge-autocomplete[formControl],forge-autocomplete[ngModel]',
  providers: [AUTOCOMPLETE_VALUE_ACCESSOR]
})
export class AutocompleteValueAccessor implements ControlValueAccessor {
  @HostListener('forge-autocomplete-change', ['$event'])
  public autocompleteChange(event: CustomEvent) {
    this.change(event.detail);
  }

  @HostListener('focusout', ['$event'])
  public blur(event: Event) {
    this.onTouched();
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
  }

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

  public change(value: any | any[] | IOption | IOption[]): void {
    this.onChange(value);
  }
}
