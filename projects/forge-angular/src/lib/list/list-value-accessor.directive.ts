import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2, StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IListComponent, IListItemSelectEventData, LIST_ITEM_CONSTANTS } from '@tylertech/forge';

export const LIST_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ListValueAccessor),
  multi: true
};

@Directive({
  selector: 'forge-list[formControlName],forge-list[formControl],forge-list[ngModel]',
  providers: [LIST_VALUE_ACCESSOR]
})
export class ListValueAccessor implements ControlValueAccessor {
  /** Controls the multiple selection mode. */
  @Input('forgeListMultiple')
  public multiple = true;

  /**
   * Responds to individual list item selections and synchronizes the list state based on
   * whether single or multiple selections are allowed.
   */
  @HostListener('forge-list-item-select', ['$event'])
  public listItemSelect({ target, detail: { value }}: CustomEvent<IListItemSelectEventData>): void {
    let listValue: unknown[] = [...this._elementRef.nativeElement.selectedValue];
    
    if (listValue.includes(value)) {
      listValue.splice(listValue.indexOf(value), 1);
    } else {
      const isSingle = !this.multiple || this._containsRadioButton(target as HTMLElement);
      listValue = isSingle ? [value] : [...listValue, value];
    }

    this.writeValue(listValue);
    this.change(listValue);
  }

  @HostListener('blur')
  public blur(): void {
    this.onTouched();
  }

  public onChange = (_: unknown | unknown[]): void => {};
  public onTouched = (): void => {};

  constructor(private _elementRef: ElementRef<IListComponent>, private _renderer: Renderer2) { }

  public writeValue(value: unknown | unknown[]): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'selectedValue', value);
  }

  public registerOnChange(fn: (_: unknown | unknown[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    const listItems = this._elementRef.nativeElement.querySelectorAll('forge-list-item');
    listItems.forEach((listItem) => {
      this._renderer.setProperty(listItem, 'disabled', isDisabled);
    });
  }

  public change(value: unknown | unknown[]): void {
    this.onChange(value);
  }

  private _containsRadioButton(target: HTMLElement): boolean {
    const el = target.querySelector(LIST_ITEM_CONSTANTS.selectors.CHECKBOX_RADIO_SELECTOR) as HTMLInputElement | null;
    return el?.type === 'radio';
  }
}
