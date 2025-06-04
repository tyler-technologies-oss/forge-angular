import { Component } from '@angular/core';
import { BottomSheetConfig, BottomSheetRef, ForgeScaffoldModule, ForgeToolbarModule, ForgeButtonModule } from '@tylertech/forge-angular';

@Component({
    selector: 'app-confirm-bottom-sheet',
    templateUrl: './confirm-bottom-sheet.component.html',
    styleUrls: ['./confirm-bottom-sheet.component.scss'],
    imports: [ForgeScaffoldModule, ForgeToolbarModule, ForgeButtonModule]
})
export class ConfirmBottomSheetComponent {
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
