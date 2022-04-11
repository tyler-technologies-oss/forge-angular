import { Directive, Input, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { OnDestroy, EmbeddedViewRef } from '@angular/core';
import { POPUP_CONSTANTS, PopupPlacement, PopupComponent } from '@tylertech/forge';

/**
 * Allows for declaratively specifying an element that should display a Forge popup
 * from the provided `TemplateRef`.
 */
@Directive({
  selector: '[forgePopup]',
  exportAs: 'forgePopup'
})
export class PopupDirective implements OnDestroy {
  private _popupElement?: PopupComponent;
  private _contentRef?: EmbeddedViewRef<any>;

  /** The TemplateRef to use as the embedded view for the popup. */
  @Input()
  public forgePopup: TemplateRef<any>;

  /** The popup placement around the `ElementRef`. */
  @Input()
  public forgePopupPlacement: PopupPlacement = 'bottom-start';

  /**
   * @deprecated Use static property instead.
   */
  @Input()
  public set forgePopupCloseOnBlur(value: boolean) {
    this.static = !value;
  }

  /** Controls whether the popup closes when it loses focus. */
  @Input()
  public static = false;

  /** Adds a custom class the `<forge-popup>` element that is created by this directive. */
  @Input()
  public forgePopupClass: string;

  public get popupElement(): HTMLElement | undefined {
    return this._popupElement;
  }

  constructor(private _elementRef: ElementRef, private _viewContainerRef: ViewContainerRef, private _renderer: Renderer2) {
    this._elementRef.nativeElement.addEventListener(POPUP_CONSTANTS.events.CLOSE, () => window.requestAnimationFrame(() => this.close()));
  }

  /** Creates and renders a TemplateRef inside of a Forge popup. */
  public open(): void {
    if (this._popupElement) {
      return;
    }

    // Ensure that we have a popup template
    if (this.forgePopup instanceof TemplateRef === false) {
      throw new Error('Popup template is not defined.');
    }

    // Create the embedded view from the template
    this._contentRef = this._viewContainerRef.createEmbeddedView(this.forgePopup);

    if (this._contentRef.rootNodes[0] instanceof PopupComponent) {
      // <forge-popup> element is supplied in the template 
      this._popupElement = this._contentRef.rootNodes[0] as PopupComponent;
      this._popupElement.remove();
    } else {
      // Create the Forge popup element
      this._popupElement = this._renderer.createElement('forge-popup') as PopupComponent;

      // Because createEmbeddedView will place the template within the element defined by ViewContainerRef, we
      // need to then move the elements to children of the Forge popup element so they render within the popup
      this._contentRef.rootNodes.forEach(node => this._popupElement?.appendChild(node));

      this._popupElement.placement = this.forgePopupPlacement;
  
      // Add the custom class (if provided)
      if (this.forgePopupClass) {
        this._popupElement.classList.add(this.forgePopupClass);
      }
  
      this._popupElement.static = this.static;
    }

    this._popupElement.targetElement = this._elementRef.nativeElement;

    // This appends the Forge popup to the body
    this._popupElement.open = true;
  }

  /** Closes the Forge popup and destroys the embedded view. */
  public close(): void {
    if (this._popupElement) {
      this._popupElement.open = false;
      this._popupElement = undefined;
    }

    if (this._contentRef) {
      this._contentRef.destroy();
      this._contentRef = undefined;
    }
  }

  public ngOnDestroy() {
    this.close();
  }
}
