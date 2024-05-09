import { Component } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  styleUrls: ['./expansion-panel.component.scss'],
  templateUrl: './expansion-panel.component.html'
})
export class ExpansionPanelComponent {
  public taskCardOneOpen = false;
  public taskCardTwoOpen = false;
  public taskCardThreeOpen = false;
}
