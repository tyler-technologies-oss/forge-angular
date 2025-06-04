import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    standalone: false
})
export class CheckboxComponent {
  public checked = true;
}
