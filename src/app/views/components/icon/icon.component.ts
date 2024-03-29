import { Component } from '@angular/core';
import { tylIconAccount } from '@tylertech/tyler-icons/extended';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  public accountSrc = tylIconAccount.data;
}
