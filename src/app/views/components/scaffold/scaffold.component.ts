import { Component } from '@angular/core';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent {
  public handleClick(target: EventTarget | null): void {
    const element = target as HTMLElement;
    if (element?.classList.contains('slot-container') || element?.classList.contains('inner')) {
      element.remove();
    }
  }
}
