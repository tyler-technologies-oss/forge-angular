import { Component } from '@angular/core';
import { DialogConfig } from '@tylertech/forge-angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  private counter: number;
  public counter$: Observable<number>;

  constructor(public dialogConfig: DialogConfig) {
    this.counter = dialogConfig.data.counter;
    
    this.counter$ = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next(this.counter);
        if (this.counter === 0) {
          clearInterval(interval);
          observer.complete();
        }
        this.counter--;
      }, 1000);
    });
  }
}
