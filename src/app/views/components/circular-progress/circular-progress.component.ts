import { Component } from '@angular/core';
import { CircularProgressTheme } from '@tylertech/forge';
@Component({
    selector: 'app-circular-progress',
    templateUrl: './circular-progress.component.html',
    standalone: false
})
export class CircularProgressComponent {
  public determinate = false;
  public progress = 0.5;
  public size = 72;
  public strokeWidth = 4;
  public color: CircularProgressTheme = 'tertiary';
}
