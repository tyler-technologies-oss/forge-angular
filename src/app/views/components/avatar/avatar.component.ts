import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  public dynamicSingleValue = 'One';
  public dynamicDoubleValue = 'Two';

  public changeSingleValue(): void {
    this.dynamicSingleValue = this._generateRandomCharacters(1);
  }

  public changeDoubleValue(): void {
    this.dynamicDoubleValue = this._generateRandomCharacters(2);
  }

  private _generateRandomCharacters(length: number): string {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, length - 1);
  }

}
