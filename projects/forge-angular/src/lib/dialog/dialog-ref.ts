import { Observable, Subject } from 'rxjs';
import { ElementRef } from '@angular/core';
import { DIALOG_CONSTANTS, IDialogComponent } from '@tylertech/forge/esm/dialog';

export class DialogRef<T = any> {
  private readonly _elementRef: ElementRef<IDialogComponent>;
  private readonly _afterClosed = new Subject<any>();
  public afterClosed: Observable<any> = this._afterClosed.asObservable();
  private readonly _beforeClose = new Subject<CustomEvent>();
  public beforeClose: Observable<CustomEvent> = this._beforeClose.asObservable();
  public componentInstance: T;

  constructor(instance: IDialogComponent) {
    this._elementRef = new ElementRef(instance);
    instance.addEventListener(DIALOG_CONSTANTS.events.BEFORE_CLOSE, evt => this._beforeClose.next(evt as CustomEvent));
  }

  public close(result?: any): void {
    this._afterClosed.next(result);
    this._afterClosed.complete();
    this._beforeClose.complete();
  }

  public get nativeElement(): IDialogComponent {
    return this._elementRef.nativeElement;
  }
}
