import { Directive, ElementRef, forwardRef, HostListener, Renderer2, StaticProvider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IListComponent, IListItemComponent, IListItemSelectEventData, LIST_ITEM_CONSTANTS } from '@tylertech/forge';

export const LIST_VALUE_ACCESSOR: StaticProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ListValueAccessor),
  multi: true
};

@Directive({
  selector: `forge-list[formControlName],forge-list[formControl],forge-list[ngModel]`,
  providers: [LIST_VALUE_ACCESSOR]
})
export class ListValueAccessor implements ControlValueAccessor {
  @HostListener('forge-list-item-select', ['$event'])
  public listItemSelect(event: CustomEvent<IListItemSelectEventData>): void {
    const { detail: { value } } = event;
    let listValue: unknown[] = this._elementRef.nativeElement.selectedValue;

    //
    // Determine control mode: Checkbox or Radio
    //
    const htmlTargetElement = event.target as HTMLElement;
    const matchedInput = htmlTargetElement.querySelector(LIST_ITEM_CONSTANTS.selectors.CHECKBOX_RADIO_SELECTOR);
    let isCheckbox = true;
    if (matchedInput) {
      const inputElement = matchedInput as HTMLInputElement;
      if (inputElement.type === 'checkbox') {
        isCheckbox = true;
      }
      else if (inputElement.type === 'radio') {
        isCheckbox = false;
      }
    }

    if (isCheckbox) {
      //
      // We're only performing reference checks here since the value is
      // coming from the list-item control, and we're comparing it to
      // the list control's selectedValue. Internally, selectedValue is performing
      // reference checks as well. If this change, this check will also need
      // to be changed to match.
      //
      if (listValue.includes(value)) {
        listValue.splice(listValue.indexOf(value), 1);
      } else {
        listValue = [...listValue, value];
      }
    }
    else {
      if (listValue.includes(value)) {
        listValue.splice(listValue.indexOf(value), 1);
      } else {
        listValue = [value]; // Radioboxes can only have a single value
      }
    }

    // Update the component state
    this.writeValue(listValue);

    this.change(listValue);
  }

  @HostListener('blur', ['$event'])
  public blur(event: Event): void {
    this.onTouched();
  }

  public onChange = (_: any): void => {};
  public onTouched = (): void => {};

  constructor(private _elementRef: ElementRef<IListComponent>, private _renderer: Renderer2) { }

  public writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'selectedValue', value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    const listItems = Array.from(this._elementRef.nativeElement.querySelectorAll(LIST_ITEM_CONSTANTS.elementName)) as IListItemComponent[];

    listItems.forEach((listItem) => {
      this._renderer.setProperty(listItem, 'disabled', isDisabled);
    });
  }

  public change(value: any | any[]): void {
    this.onChange(value);
  }
}
