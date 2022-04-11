import { Component } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  public defaultTextFieldValue = 'Default';
  public roomyTextFieldValue = 'Roomy';
  public denseTextFieldValue = 'Dense';
  public textAreaValue = 'textarea value';
}
