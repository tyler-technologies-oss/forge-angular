import { Component } from '@angular/core';
import { BottomSheetConfig, BottomSheetRef } from '@tylertech/forge-angular';

@Component({
  selector: 'lazy-bottom-sheet',
  templateUrl: './lazy-bottom-sheet.component.html',
  styleUrls: ['./lazy-bottom-sheet.component.scss']
})
export class LazyBottomSheetComponent {
  public title: string;
  public message: string;
  public moveable: boolean;

  constructor(public bottomSheetConfig: BottomSheetConfig, private _bottomSheetRef: BottomSheetRef) {
    this.title = bottomSheetConfig.data.title;
    this.message = bottomSheetConfig.data.message;
    this.moveable = bottomSheetConfig.data.moveable;
  }

  public onCancel(): void {
    this._bottomSheetRef.close(false);
  }

  public onConfirm(): void {
    this._bottomSheetRef.close(true);
  }
}
