import { Component } from '@angular/core';
import { TOOLTIP_CONSTANTS } from '@tylertech/forge';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    standalone: false
})
export class TooltipComponent {
  public text = `Hey I'm a useful tooltip!`;
  public delay = TOOLTIP_CONSTANTS.defaults.DELAY;
  public placement = TOOLTIP_CONSTANTS.defaults.PLACEMENT;
}
