import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChipSelectEventData } from '@tylertech/forge';
import { ToastService } from '@tylertech/forge-angular';

interface IChip {
  text: string;
  icon?: string;
  delete?: boolean;
}

const inputChipsSource: IChip[] = [
  { text: 'Falmouth', icon: 'place', delete: true },
  { text: 'Yarmouth', icon: 'place', delete: true },
  { text: 'Plano', icon: 'place', delete: true },
  { text: 'Renton', icon: 'place', delete: true }
];

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html'
})
export class ChipsComponent {
  public inputChips$ = new BehaviorSubject<IChip[]>([...inputChipsSource]);

  constructor(private _toastService: ToastService) {}

  public onInputChipDeleted(chip: IChip): void {
    const ary = this.inputChips$.value;
    ary.splice(ary.indexOf(chip), 1);
    this.inputChips$.next([...ary]);
  }

  public resetInputChips(): void {
    this.inputChips$.next([...inputChipsSource]);
  }

  public onActionChipSelected(evt: CustomEvent): void {
    const detail = evt.detail as IChipSelectEventData;
    this._toastService.show(`Action chip selected: ${detail.value}`);
  }
}
