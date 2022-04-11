import { Injectable } from '@angular/core';
import { IBusyIndicatorComponent } from '@tylertech/forge';

/**
 * Provides facilities for showing/hiding a busy indicator.
 */
@Injectable({
  providedIn: 'root'
})
export class BusyIndicatorService {
  /**
   * Shows a busy indicator in a parent element (or the body if not provided).
   * @param config The busy indicator component configuration.
   * @param [parent] The parent element to attach this busy indicator instance to.
   */
  public show(config: Partial<IBusyIndicatorComponent>, parent = document.body): IBusyIndicatorComponent {
    const element = document.createElement('forge-busy-indicator');
    Object.assign(element, config);
    parent.appendChild(element);
    return element;
  }

  /**
   * Removes the busy indicator from the DOM.
   */
  public hide(selector?: string): void {
    const element = document.querySelector(selector ?? 'forge-busy-indicator');
    if (element) {
      element.remove();
    }
  }
}
