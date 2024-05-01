import { Component } from '@angular/core';

@Component({
  selector: 'app-linear-progress',
  styleUrls: ['./linear-progress.component.scss'],
  templateUrl: './linear-progress.component.html'
})
export class LinearProgressComponent {
  public isDeterminate = false;
  public progress = 0.5;
  public buffer = 1;
  public sliderProgressValue = 50;
  public sliderBufferValue = 100;

  public onDeterminateChanged(): void {
    this.progress = 0.5;
    this.buffer = 1;
    this.sliderProgressValue = 50;
    this.sliderBufferValue = 100;
  }
}
