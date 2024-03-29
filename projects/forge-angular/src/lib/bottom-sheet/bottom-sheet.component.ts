// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { BottomSheetComponent as BottomSheetComponentCustomElement, defineBottomSheetComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-bottom-sheet>` custom element. */
@Component({
  selector: 'forge-bottom-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BottomSheetComponent {

	/** The forge-bottom-sheet element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Controls whether clicking the backdrop closes the bottom-sheet or not. Default is true. */
	@Input({ transform: booleanAttribute })
	public set backdropClose(value: BottomSheetComponentCustomElement['backdropClose']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.backdropClose = value;
		});
	}
	public get backdropClose(): BottomSheetComponentCustomElement['backdropClose'] {
		return this.nativeElement.backdropClose;
	}

	/** Controls whether pressing the escape key closes the bottom-sheet or not. Default is true. */
	@Input({ transform: booleanAttribute })
	public set escapeClose(value: BottomSheetComponentCustomElement['escapeClose']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.escapeClose = value;
		});
	}
	public get escapeClose(): BottomSheetComponentCustomElement['escapeClose'] {
		return this.nativeElement.escapeClose;
	}

	/** Controls whether the bottom-sheet is open or not. Default is false. */
	@Input({ transform: booleanAttribute })
	public set open(value: BottomSheetComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): BottomSheetComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	/** Controls whether the bottom-sheet is full screen or not. Default is false. */
	@Input({ transform: booleanAttribute })
	public set fullscreen(value: BottomSheetComponentCustomElement['fullscreen']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.fullscreen = value;
		});
	}
	public get fullscreen(): BottomSheetComponentCustomElement['fullscreen'] {
		return this.nativeElement.fullscreen;
	}

	/** Shows a backdrop to prevent interacting with other content until the bottom sheet is dismissed.  Default is false. */
	@Input({ transform: booleanAttribute })
	public set showBackdrop(value: BottomSheetComponentCustomElement['showBackdrop']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.showBackdrop = value;
		});
	}
	public get showBackdrop(): BottomSheetComponentCustomElement['showBackdrop'] {
		return this.nativeElement.showBackdrop;
	}

	/** The function to call when the bottom-sheet wants to open. */
	@Input()
	public set openCallback(value: BottomSheetComponentCustomElement['openCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.openCallback = value;
		});
	}
	public get openCallback(): BottomSheetComponentCustomElement['openCallback'] {
		return this.nativeElement.openCallback;
	}

	/** the function to call when the bottom-sheet wants to close. */
	@Input()
	public set closeCallback(value: BottomSheetComponentCustomElement['closeCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.closeCallback = value;
		});
	}
	public get closeCallback(): BottomSheetComponentCustomElement['closeCallback'] {
		return this.nativeElement.closeCallback;
	}

	/** the function to call when the bottom-sheet wants to close. */
	@Input()
	public set beforeCloseCallback(value: BottomSheetComponentCustomElement['beforeCloseCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.beforeCloseCallback = value;
		});
	}
	public get beforeCloseCallback(): BottomSheetComponentCustomElement['beforeCloseCallback'] {
		return this.nativeElement.beforeCloseCallback;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<BottomSheetComponentCustomElement>,
		protected zone: NgZone
	) {
		defineBottomSheetComponent();
		changeDetectorRef.detach();
	}
}
