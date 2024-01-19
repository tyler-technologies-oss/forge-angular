import { Component } from '@angular/core';
import { DialogConfig } from '@tylertech/forge-angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public counter$: Observable<number>;

  constructor(public dialogConfig: DialogConfig) {
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
