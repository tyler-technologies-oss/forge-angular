import { Observable } from 'rxjs';

export class SimpleDialogConfig {
  title: string;
  message: string;
  confirmButtonConfig?: SimpleDialogButtonConfig;
  cancelButtonConfig?: SimpleDialogButtonConfig;
  toolbarBorders?: boolean;
  preventDismiss?: boolean;
  dismissReturnValue?: any;
  focus?: SimpleDialogFocus;
  errorMode?: SimpleDialogErrorMode;
  alert?: boolean;
  id?: string;
}

export class SimpleDialogButtonConfig {
  label: string;
  returnValue?: any;
  handler?: Observable<unknown>;
}

export class SimpleDialogError {
  error: any;
}

export type SimpleDialogFocus = 'auto' | 'dismiss-button' | 'cancel-button' | 'confirm-button';

export type SimpleDialogErrorMode = 'ignore' | 'close';
