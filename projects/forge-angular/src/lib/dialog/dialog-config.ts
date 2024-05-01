import { InjectionToken } from '@angular/core';

export class DialogConfig<T = unknown> {
  public data: T;
}

export const DIALOG_DATA = new InjectionToken<unknown>('DIALOG_DATA');
