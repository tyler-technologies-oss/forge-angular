import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BusyIndicatorService } from '@tylertech/forge-angular';
import { BUSY_INDICATOR_CONSTANTS } from '@tylertech/forge';

@Component({
  selector: 'app-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss']
})
export class BusyIndicatorComponent {
  public title = 'Title';
  public message = 'Message';
  public constrain = false;
  public cancel = false;
  public spinner = true;
  public progressBar = false;
  public progressBarMode = 'indeterminate';

  @ViewChild('busyIndicatorHost', { read: ViewContainerRef, static: true })
  public busyIndicatorHostRef: ViewContainerRef;

  constructor(private _busyIndicatorService: BusyIndicatorService) {}

  public showBusyIndicator(): void {
    const busyIndicator = this._busyIndicatorService.show({
      titleText: this.title,
      message: this.message,
      cancel: this.cancel,
      spinner: this.spinner,
      progressBar: this.progressBar,
      progressBarDeterminate: this.progressBarMode === 'determinate' || this.progressBarMode === 'buffer',
      progress: 0.5,
      buffer: this.progressBarMode === 'buffer' ? 0.75 : 1
    }, this.constrain ? this.busyIndicatorHostRef.element.nativeElement : undefined);

    if (this.cancel) {
      busyIndicator.addEventListener(BUSY_INDICATOR_CONSTANTS.events.CANCEL, () => {
        console.log('Busy indicator cancelled.');
        if (timer) {
          clearTimeout(timer);
        }
        setTimeout(() => busyIndicator.hide(), 1500);
      });
    }

    const timer = setTimeout(() => this._busyIndicatorService.hide(), 3000);
  }
}
