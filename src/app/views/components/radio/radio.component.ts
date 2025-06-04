import { Component } from '@angular/core';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    standalone: false
})
export class RadioComponent {
  public selected = 'two';
}
