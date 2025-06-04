import { Component } from '@angular/core';
import { ToastService, ToastConfig, IToastConfig, ForgeButtonModule, ForgeTextFieldModule, ForgeSelectProxyModule, ForgeSelectModule, ForgeOptionModule, ForgeCheckboxProxyModule, ForgeCheckboxModule } from '@tylertech/forge-angular';
import { ToastPlacement } from '@tylertech/forge';
import { CustomToastComponent } from './custom-toast/custom-toast.component';
import { DemoCardComponent } from '../../../shared/components/demo-card/demo-card.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    imports: [DemoCardComponent, ForgeButtonModule, ForgeTextFieldModule, FormsModule, ForgeSelectProxyModule, ForgeSelectModule, ForgeOptionModule, ForgeCheckboxProxyModule, ForgeCheckboxModule]
})
export class ToastComponent {
  public message = 'Save successful';
  public actionText = 'UNDO';
  public duration = 2000;
  public placement: ToastPlacement = 'bottom';
  public dismissible = true;
  public useCustom = false;

  constructor(private _toastService: ToastService) {}

  public onShowToast(): void {
    const toastData: ToastConfig = {
      data: {
        message: `Custom toast: ${this.message}`
      }
    };
    const config: IToastConfig = {
      component: this.useCustom ? CustomToastComponent : undefined,
      message: !this.useCustom ? this.message : undefined,
      actionText: this.actionText,
      actionHandler: () => toast.close(),
      placement: this.placement,
      duration: this.duration,
      dismissible: this.dismissible
    };
    const toast = this._toastService.show(config, toastData);
  }
}
