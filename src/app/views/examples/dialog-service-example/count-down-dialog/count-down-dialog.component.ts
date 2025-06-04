import { Component } from '@angular/core';
import { DialogConfig, ForgeToolbarModule } from '@tylertech/forge-angular';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-count-down-dialog',
    templateUrl: './count-down-dialog.component.html',
    styleUrls: ['./count-down-dialog.component.scss'],
    imports: [ForgeToolbarModule, AsyncPipe]
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
