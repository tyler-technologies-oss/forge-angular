import { Component } from '@angular/core';
import { IPaginatorChangeEvent } from '@tylertech/forge';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  public total = 100;

  public onPaginatorChanged(evt: CustomEvent<IPaginatorChangeEvent>): void {
    console.log('onPaginatorChanged', evt.detail);
  }
}
