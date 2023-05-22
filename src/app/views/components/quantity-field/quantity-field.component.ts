import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconAddCircleOutline, tylIconRemoveCircleOutline } from '@tylertech/tyler-icons/standard';

@Component({
  selector: 'app-quantity-field',
  templateUrl: './quantity-field.component.html',
  styleUrls: ['./quantity-field.component.scss']
})
export class QuantityFieldComponent {
  public value = 10;

  constructor() {
    IconRegistry.define([
      tylIconAddCircleOutline,
      tylIconRemoveCircleOutline
    ]);
  }
}
