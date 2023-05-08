import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { IOption } from '@tylertech/forge';

@Component({
  selector: 'app-chip-field-autocomplete-reactive-form',
  templateUrl: './chip-field-autocomplete-reactive-form.component.html',
  styleUrls: ['./chip-field-autocomplete-reactive-form.component.scss']
})
export class ChipFieldAutocompleteReactiveFormComponent implements OnInit {

  public autocompleteForm: UntypedFormGroup;
  public statesControl: UntypedFormControl;
  public states: IOption[] = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' }
  ];

  public filterListener = (filter: string) => this._onFilter(filter);

  constructor(private _fb: UntypedFormBuilder) { }

  public ngOnInit() {
    this.autocompleteForm = this._fb.group({
      states: this._fb.control([], [Validators.minLength(2), Validators.required]),
    });

    this.statesControl = this.autocompleteForm.get('states') as UntypedFormControl;

    this._selectState('MI');
    this._selectState('WA');
  }

  public deselectState(event$: CustomEvent) {
    const value = event$.detail.value;
    const newStatesArray = [ ...this.statesControl.value ] as string[];
    const index = newStatesArray.findIndex(x => x === value);
    if (index === -1) {
      return;
    }

    newStatesArray.splice(index, 1);
    this.statesControl.setValue(newStatesArray);
  }

  public selectState(event$: CustomEvent) {
    this._selectState(event$.detail);
  }

  private _selectState(value: string) {
    const safeValue = value.trim().toUpperCase();
    if (!this._valueIsAllowed(safeValue)) {
      return;
    }

    const newArray = this.statesControl.value as string[];
    newArray.push(safeValue);
    this.statesControl.setValue(newArray);
  }

  private _onFilter(filter: string): IOption[] {
    return this.states.filter(state => state.label.toLowerCase().includes(filter.toLowerCase()));
  }

  private _valueIsAllowed(value: string) {
    const safeValue = value.toUpperCase().trim();
    const matchesDataSet = this.states.findIndex(s => s.value === safeValue) > -1;
    const isAlreadySelected = this.statesControl.value.includes(safeValue);
    return matchesDataSet && !isAlreadySelected;
  }

  public onSubmit() {
    const formJson = JSON.stringify(this.autocompleteForm.value);
    alert(`Form submitted: ${formJson}`);
  }

  public disableForm($event: MouseEvent) {
    const isDisabled = ($event.target as HTMLInputElement).checked;
    if (isDisabled) {
      this.autocompleteForm.disable();
    } else {
      this.autocompleteForm.enable();
    }
  }

}
