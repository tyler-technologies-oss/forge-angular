import { Component } from '@angular/core';
import { ToastConfig } from '@tylertech/forge-angular';

@Component({
    selector: 'app-custom-toast',
    templateUrl: './custom-toast.component.html',
    styleUrls: ['./custom-toast.component.scss'],
    standalone: false
})
export class CustomToastComponent {
  public message = 'custom-toast works!';

  constructor(public toastConfig: ToastConfig) {
    if (toastConfig && toastConfig.data && toastConfig.data.message) {
      this.message = toastConfig.data.message;
    }
  }
}
