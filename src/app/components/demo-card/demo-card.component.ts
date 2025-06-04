import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ForgeCardModule } from '@tylertech/forge-angular';

@Component({
    selector: 'app-demo-card',
    exportAs: 'app-demo-card',
    templateUrl: './demo-card.component.html',
    styleUrls: ['./demo-card.component.scss'],
    imports: [CommonModule, ForgeCardModule]
})
export class DemoCardComponent {
  @Input()
  public headerText: string;

  @Input()
  public fullWidth = false;
}
