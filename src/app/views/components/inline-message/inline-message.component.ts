import { Component } from '@angular/core';
import { IconRegistry } from '@tylertech/forge';
import { tylIconCake } from '@tylertech/tyler-icons/standard';

@Component({
    selector: 'app-inline-message',
    templateUrl: './inline-message.component.html',
    styleUrls: ['./inline-message.component.scss'],
    standalone: false
})
export class InlineMessageComponent {
  constructor() {
    IconRegistry.define(tylIconCake);
  }
}
