import { Component } from '@angular/core';
import { DialogConfig } from '@tylertech/forge-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count-down-dialog',
  templateUrl: './count-down-dialog.component.html',
  styleUrls: ['./count-down-dialog.component.scss']
})
export class CountDownDialogComponent {
  public counter$: Observable<number>;

  constructor(public dialogConfig: DialogConfig<{ counter: number }>) {
    let localCounter = dialogConfig.data.counter;
    
    this.counter$ = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next(localCounter);
        if (localCounter === 0) {
          clearInterval(interval);
          observer.complete();
        }
        localCounter--;
      }, 1000);
    });
  }
}
