import { Component, ViewChild, ElementRef } from '@angular/core';
import { TOOLTIP_CONSTANTS, ITooltipComponent, IAvatarComponent, PopupPlacement, AvatarComponentDelegate } from '@tylertech/forge';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
  public text = `Hey I'm a useful tooltip!`;
  public delay = TOOLTIP_CONSTANTS.numbers.DEFAULT_DELAY;
  public position = TOOLTIP_CONSTANTS.strings.DEFAULT_POSITION as PopupPlacement;
  public useBuilder = false;

  @ViewChild('tooltip', { read: ElementRef, static: true })
  public tooltipRef: ElementRef;

  public onUseBuilderChanged(evt: Event): void {
    const tooltip = this.tooltipRef.nativeElement as ITooltipComponent;
    if (this.useBuilder) {
      tooltip.builder = () => {
        const avatarDelegate = new AvatarComponentDelegate({
          options: {
            children: 'Tyler Technologies'
          },
          props: {
            letterCount: 1
          }
        });
        return avatarDelegate.element;
      };
    } else {
      tooltip.builder = undefined;
    }
  }
}
