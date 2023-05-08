import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chip-field-simple-reactive-form',
  templateUrl: './chip-field-simple-reactive-form.component.html',
  styleUrls: ['./chip-field-simple-reactive-form.component.scss']
})
export class ChipFieldSimpleReactiveFormComponent implements OnInit {

  public chipFieldForm: UntypedFormGroup;
  public tokensFormArray: UntypedFormArray;

  constructor(private _fb: UntypedFormBuilder) { }

  public ngOnInit(): void {
    this.chipFieldForm = this._fb.group({
      tokens: this._fb.array([], [Validators.minLength(2), Validators.required]),
    });

    this.tokensFormArray = this.chipFieldForm.get('tokens') as UntypedFormArray;

    this._addMember('Token A');
    this._addMember('Token B');
  }

  public addMember(event$: CustomEvent) {
    this._addMember(event$.detail);
  }

  private _addMember(value: string) {
    this.tokensFormArray.push(this._fb.control(value));
  }

  public deleteMember(event$: CustomEvent) {
    const chipVal = event$.detail.value;
    const index = this.tokensFormArray.controls.findIndex(c => c.value === chipVal);
    if (index === -1) {
      return;
    }

    this.tokensFormArray.removeAt(index);
  }

  public onSubmit() {
    const formJson = JSON.stringify(this.chipFieldForm.value);
    alert(`Form submitted: ${formJson}`);
  }

  public disableForm($event: Event) {
    const isDisabled = ($event.target as HTMLInputElement).checked;
    if (isDisabled) {
      this.chipFieldForm.disable();
    } else {
      this.chipFieldForm.enable();
    }
  }

}
