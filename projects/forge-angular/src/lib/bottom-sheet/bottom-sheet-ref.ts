import { ElementRef } from '@angular/core';
import { AsyncSubject, Observable, Subject } from 'rxjs';

import { BOTTOM_SHEET_CONSTANTS, IBottomSheetComponent } from '@tylertech/forge';

export class BottomSheetRef<T = any> {
  private readonly _elementRef: ElementRef<IBottomSheetComponent>;
  private readonly _afterClosed = new AsyncSubject<any>();
  public afterClosed: Observable<any> = this._afterClosed.asObservable();
  private readonly _beforeClose = new Subject<CustomEvent>();
  public beforeClose: Observable<CustomEvent> = this._beforeClose.asObservable();
  public componentInstance: T;

  constructor(instance: IBottomSheetComponent) {
    this._elementRef = new ElementRef(instance);
    instance.addEventListener(BOTTOM_SHEET_CONSTANTS.events.BEFORE_CLOSE, evt => this._beforeClose.next(evt as CustomEvent));
  }

  public close(result?: any): void {
    this._afterClosed.next(result);
    this._afterClosed.complete();
    this._beforeClose.complete();
  }

  public get nativeElement(): IBottomSheetComponent {
    return this._elementRef.nativeElement;
  }
}
