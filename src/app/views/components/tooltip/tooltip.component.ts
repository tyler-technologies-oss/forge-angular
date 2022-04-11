import { Component, ViewChild, ElementRef } from '@angular/core';
import { TOOLTIP_CONSTANTS, ITooltipComponent, IAvatarComponent } from '@tylertech/forge';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  public text = 'Hey I\'m a useful tooltip!';
  public delay = TOOLTIP_CONSTANTS.numbers.DEFAULT_DELAY;
  public position = TOOLTIP_CONSTANTS.strings.DEFAULT_POSITION;
  public useBuilder = false;

  @ViewChild('tooltip', { static: true })
  public tooltipRef: ElementRef;

  public onUseBuilderChanged(evt: Event): void {
    const tooltip = this.tooltipRef.nativeElement as ITooltipComponent;
    if (this.useBuilder) {
      tooltip.builder = () => {
        const avatarIcon = document.createElement('forge-avatar') as IAvatarComponent;
        avatarIcon.text = 'Tyler Technologies';
        avatarIcon.letterCount = 1;
        return avatarIcon;
      };
    } else {
      tooltip.builder = undefined;
    }
  }
}
