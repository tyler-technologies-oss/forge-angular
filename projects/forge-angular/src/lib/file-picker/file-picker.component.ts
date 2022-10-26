// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { FilePickerComponent as FilePickerComponentCustomElement } from '@tylertech/forge';

/** The web component class behind the `<forge-file-picker>` custom element. */
@Component({
  selector: 'forge-file-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class FilePickerComponent {

	/** Gets and sets the allowed file types */
	@Input()
	public set accept(value: FilePickerComponentCustomElement['accept']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.accept = value;
		});
	}

	public get accept(): FilePickerComponentCustomElement['accept'] {
		return this.elementRef.nativeElement.accept;
	}

	/** Gets and sets the maximum allowed file size */
	@Input()
	public set maxSize(value: FilePickerComponentCustomElement['maxSize']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.maxSize = value;
		});
	}

	public get maxSize(): FilePickerComponentCustomElement['maxSize'] {
		return this.elementRef.nativeElement.maxSize;
	}

	/** Gets and sets the camera to use when capturing video or images */
	@Input()
	public set capture(value: FilePickerComponentCustomElement['capture']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.capture = value;
		});
	}

	public get capture(): FilePickerComponentCustomElement['capture'] {
		return this.elementRef.nativeElement.capture;
	}

	/** Gets and sets whether multiple files are allowed */
	@Input()
	public set multiple(value: FilePickerComponentCustomElement['multiple'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.multiple = value != null && `${value}` !== 'false';
		});
	}

	public get multiple(): FilePickerComponentCustomElement['multiple'] {
		return this.elementRef.nativeElement.multiple;
	}

	/** Gets and sets whether the file picker is disabled */
	@Input()
	public set disabled(value: FilePickerComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): FilePickerComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}

	/** Gets and sets whether the file picker is compact */
	@Input()
	public set compact(value: FilePickerComponentCustomElement['compact'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.compact = value != null && `${value}` !== 'false';
		});
	}

	public get compact(): FilePickerComponentCustomElement['compact'] {
		return this.elementRef.nativeElement.compact;
	}

	/** Gets and sets whether the file picker is borderless */
	@Input()
	public set borderless(value: FilePickerComponentCustomElement['borderless'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.borderless = value != null && `${value}` !== 'false';
		});
	}

	public get borderless(): FilePickerComponentCustomElement['borderless'] {
		return this.elementRef.nativeElement.borderless;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<FilePickerComponentCustomElement>,
		protected zone: NgZone
	) {
		if (!window.customElements.get('forge-file-picker')) {
			window.customElements.define('forge-file-picker', FilePickerComponentCustomElement);
		}
		changeDetectorRef.detach();
	}
}
