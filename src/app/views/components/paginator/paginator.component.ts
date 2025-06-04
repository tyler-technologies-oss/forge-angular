import { Component } from '@angular/core';
import { IPaginatorChangeEventData } from '@tylertech/forge';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    standalone: false
})
export class PaginatorComponent {
  public total = 100;

  public onPaginatorChanged(evt: CustomEvent<IPaginatorChangeEventData>): void {
    console.log('onPaginatorChanged', evt.detail);
  }
}
