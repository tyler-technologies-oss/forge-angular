import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconAdd, tylIconDelete, tylIconFavorite } from '@tylertech/tyler-icons/standard';

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.component.html'
})
export class FloatingActionButtonComponent {
  constructor() {
    IconRegistry.define([
      tylIconAdd,
      tylIconDelete,
      tylIconFavorite
    ]);
  }
}
