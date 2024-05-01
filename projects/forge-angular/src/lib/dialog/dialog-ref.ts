import { Observable, Subject } from 'rxjs';
import { ElementRef } from '@angular/core';
import { IDialogComponent } from '@tylertech/forge';

export class DialogRef<TComponent = any, TResult = any> {
  private readonly _elementRef: ElementRef<IDialogComponent>;
  
  private readonly _afterClosed = new Subject<TResult | undefined>();
  public afterClosed: Observable<TResult | undefined> = this._afterClosed.asObservable();

  private readonly _beforeClose = new Subject<CustomEvent<void>>();
  public beforeClose: Observable<CustomEvent<void>> = this._beforeClose.asObservable();

  public componentInstance: TComponent;

  constructor(instance: IDialogComponent) {
    this._elementRef = new ElementRef(instance);
    instance.addEventListener('forge-dialog-before-close', evt => this._beforeClose.next(evt));
  }

  public close(result?: TResult): void {
    this.nativeElement.open = false;
    this._afterClosed.next(result);
    this._afterClosed.complete();
    this._beforeClose.complete();
  }

  public get nativeElement(): IDialogComponent {
    return this._elementRef.nativeElement;
  }
}
