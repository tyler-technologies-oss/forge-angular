import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, AbstractControl, UntypedFormControl } from '@angular/forms';
import { IOption, IAutocompleteComponent } from '@tylertech/forge';

@Component({
  selector: 'app-form',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {
  @ViewChild('stateAutocomplete', { static: true, read: ElementRef })
  public stateAutocomplete: ElementRef;

  public shirtQuantityControl: UntypedFormControl;
  public exampleForm: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder) {
    this.exampleForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      send: [true],
      dob: [null, Validators.required],
      tob: [null, Validators.required],
      gender: ['male', Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      favoriteNumber: [0, Validators.required],
      shirtSize: ['m', Validators.required],
      shirtQuantity: [1, Validators.min(1)],
      agree: [false, Validators.required]
    });

    this.shirtQuantityControl = this.exampleForm.get('shirtQuantity') as UntypedFormControl;
  }

  public ngOnInit(): void {
    (<IAutocompleteComponent>this.stateAutocomplete.nativeElement).filter = filter => this._onFilterStates(filter);
  }

  private _onFilterStates(filter: string): IOption[] {
    return this.states.filter(state => state.label.toLowerCase().includes(filter.toLowerCase()));
  }

  public get shirtSize(): AbstractControl {
    return this.exampleForm.get('shirtSize') as AbstractControl;
  }

  public get favoriteNumber(): AbstractControl {
    return this.exampleForm.get('favoriteNumber') as AbstractControl;
  }

  public onSubmit(): void {
    if (this.exampleForm.invalid) {
      return;
    }
    console.log(this.exampleForm.value);
  }

  public onReset(): void {
    this.exampleForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      send: true,
      dob: '',
      gender: 'male',
      state: null,
      country: '',
      favoriteNumber: 0,
      shirtSize: 'm',
      shirtQuantity: 1,
      agree: false
    });
  }

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

  public isInvalid(name: string): boolean {
    const control = this.exampleForm.get(name);
    return !!control && control.touched && control.invalid;
  }
}
