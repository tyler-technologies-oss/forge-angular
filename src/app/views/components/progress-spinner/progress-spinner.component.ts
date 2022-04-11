import { Component } from '@angular/core';
import { ThemeType } from '@tylertech/forge';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html'
})
export class ProgressSpinnerComponent {
  public determinate = false;
  public progress = 50;
  public diameter = 75;
  public strokeWidth = 10;
  public color: ThemeType = 'primary';
}
