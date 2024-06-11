import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent{
  public continuous = 25;
  public discrete = 50;
  public discreteMarkers = 70;
  public rangeValue = { valueStart: 25, valueEnd: 75 };
}
