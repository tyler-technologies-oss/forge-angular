import { Component } from '@angular/core';
@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html'
})
export class ProgressSpinnerComponent {
  public determinate = false;
  public progress = .5;
  public size = 72;
  public strokeWidth = 4;
  public color: string = 'tertiary';
}
