import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validity-directive',
  templateUrl: './form-validity-directive-example.component.html',
  styleUrls: ['./form-validity-directive-example.component.scss']
})

export class FormValidityDirectiveExampleComponent {
  public form = new FormGroup({
    textField: new FormControl(null, [Validators.required]),
    select: new FormControl(null, [Validators.required]),
    dateField: new FormControl(null, [Validators.required])
  });
}
