import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFavorite } from '@tylertech/tyler-icons/standard';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor() {
    IconRegistry.define(tylIconFavorite);
  }
}
