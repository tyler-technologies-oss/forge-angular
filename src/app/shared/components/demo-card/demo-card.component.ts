import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-card',
  exportAs: 'app-demo-card',
  templateUrl: './demo-card.component.html',
  styleUrls: ['./demo-card.component.scss']
})
export class DemoCardComponent {
  @Input()
  public headerText: string;

  @Input()
  public fullWidth = false;
}
