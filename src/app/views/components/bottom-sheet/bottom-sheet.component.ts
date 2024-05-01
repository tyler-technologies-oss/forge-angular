import { Compiler, Component, Injector } from '@angular/core';
import { BottomSheetService, IBottomSheetOptions, ToastService } from '@tylertech/forge-angular';
import { take, takeUntil } from 'rxjs/operators';

import { ConfirmBottomSheetComponent } from './confirm/confirm-bottom-sheet.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html'
})
export class BottomSheetComponent {
  public persistent = false;
  public fullscreen = false;
  public lazyload = false;
  public nonmodal = false;
  public bottomSheetClass = '';
  public preventClose = false;
  public scrollable = false;
  public options: IBottomSheetOptions = {};

  constructor(
    private _bottomSheetService: BottomSheetService,
    private _toastService: ToastService,
    private _compiler: Compiler,
    private _injector: Injector) {
  }

  public async showConfirmBottomSheet(): Promise<void> {
    const bottomSheetOptions: IBottomSheetOptions = {
      mode: this.nonmodal ? 'nonmodal' : 'modal',
      persistent: this.persistent,
      fullscreen: this.fullscreen,
      bottomSheetClass: this.bottomSheetClass,
      attributes: new Map([
        ['aria-labelledby', 'bottomSheet-title'],
        ['aria-describedby', 'bottomSheet-desc']
      ])
    };

    const bottomSheetConfig = {
      data: {
        title: 'Confirm',
        message: this.scrollable
          ? 'lorem ipsum '.repeat(1024)
          : 'Are you sure you want to close the bottom sheet?'
      }
    };

    if (!this.lazyload) {
      const bottomSheetRef = this._bottomSheetService.show(
        ConfirmBottomSheetComponent,
        bottomSheetOptions,
        bottomSheetConfig
      );
      console.log('Native Forge bottom sheet instance', bottomSheetRef.nativeElement);
      console.log('[BottomSheetRef] Angular componentInstance', bottomSheetRef.componentInstance);
      bottomSheetRef.afterClosed.pipe(take(1)).subscribe(result => {
        this._toastService.show(`Bottom sheet closed with result: ${result}`);
      });
      if (this.preventClose) {
        bottomSheetRef.beforeClose.pipe(takeUntil(bottomSheetRef.afterClosed)).subscribe(evt => {
          console.log('[beforeClosed subscription] preventDefault');
          evt.preventDefault();
        });
      }
    } else {
      // lazyload
      const { LazyBottomSheetModule } = await import('./lazy/lazy-bottom-sheet.module');
      const moduleFactory = await this._compiler.compileModuleAsync(LazyBottomSheetModule);
      const moduleRef = moduleFactory.create(this._injector);
      const componentFactory = moduleRef.instance.resolveComponent();
      const bottomSheetRef = this._bottomSheetService.show(componentFactory.componentType, bottomSheetOptions, bottomSheetConfig);
      console.log('Native Forge bottomSheet instance', bottomSheetRef.nativeElement);
      console.log('[BottomSheetRef] Angular componentInstance', bottomSheetRef.componentInstance);
      bottomSheetRef.afterClosed.pipe(take(1)).subscribe(result => {
        this._toastService.show(`BottomSheet closed with result: ${result}`);
      });
      if (this.preventClose) {
        bottomSheetRef.beforeClose.pipe(takeUntil(bottomSheetRef.afterClosed)).subscribe(evt => {
          console.log('[beforeClosed subscription] preventDefault');
          evt.preventDefault();
        });
      }
    }
  }
}
