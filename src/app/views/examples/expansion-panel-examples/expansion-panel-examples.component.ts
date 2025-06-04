import { Component, OnInit } from '@angular/core';

import { ExpansionPanelExamplesService } from './expansion-panel-examples.service';
import { IData } from './IData';
import { ForgeCardModule, ForgeOpenIconModule, ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule, ForgeExpansionPanelModule } from '@tylertech/forge-angular';
import { NgFor, NgClass } from '@angular/common';
import { ViewSwitcherDemoComponent } from './components/view-switcher/view-switcher.component';

@Component({
    selector: 'app-expansion-panel-examples',
    templateUrl: './expansion-panel-examples.component.html',
    styleUrls: ['./expansion-panel-examples.component.scss'],
    imports: [ForgeCardModule, NgFor, NgClass, ForgeOpenIconModule, ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule, ForgeExpansionPanelModule, ViewSwitcherDemoComponent]
})
export class ExpansionPanelExamplesComponent implements OnInit {
  public data: IData[];
  public showFlexboxOutlines = false;

  constructor(private _expansionService: ExpansionPanelExamplesService) {}

  public ngOnInit(): void {
    this._expansionService.getData().subscribe({
      next: data => {
        this.data = data;
      }
    });
  }

  public toggleShowOutlines(event: boolean): void {
    this.showFlexboxOutlines = event;
  }
}
