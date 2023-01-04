import { Component } from '@angular/core';
import { SplitViewOrientation, SplitViewPanelResizable } from '@tylertech/forge';

@Component({
  selector: 'app-split-view',
  templateUrl: './split-view.component.html'
})
export class SplitViewComponent {
  public panels: {label: string, resizable: SplitViewPanelResizable, open: boolean }[] = [
    { label: 'Panel one', resizable: 'end', open: true },
    { label: 'Panel two', resizable: 'off', open: true },
    { label: 'Panel three', resizable: 'start', open: true },
  ];
  public orientation: SplitViewOrientation = 'horizontal';
  public allowClose: boolean = false;
  public disabled: boolean = false;
  public autoClose: boolean = false;
  public autoCloseThreshold: number = 20;

  public addPanel() {
    const panels = this.panels.map(s => ({...s}));
     panels.push({label: (this.panels.length + 1).toString() + ' Panel', resizable: 'start', open: true });
     this.panels = panels;
  }

  public removePanel() {
    this.panels = this.panels.slice(0, this.panels.length - 1);
  }
}
