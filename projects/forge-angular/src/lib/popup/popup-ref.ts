import { ElementRef } from '@angular/core';
import { IPopupComponent } from '@tylertech/forge';
import { AsyncSubject, Observable } from 'rxjs';

export class PopupRef<T = unknown> {
  private readonly _elementRef: ElementRef<IPopupComponent>;
  private readonly _afterClosed = new AsyncSubject<unknown>();
  public afterClosed: Observable<unknown> = this._afterClosed.asObservable();
  public componentInstance: T;

  constructor(instance: IPopupComponent) {
    this._elementRef = new ElementRef(instance);
  }

  public close(result?: unknown): void {
    this._afterClosed.next(result);
    this._afterClosed.complete();
  }

  public get nativeElement(): IPopupComponent {
    return this._elementRef.nativeElement;
  }
}
