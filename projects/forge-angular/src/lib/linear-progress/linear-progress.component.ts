// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { LinearProgressComponent as LinearProgressComponentCustomElement, defineLinearProgressComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-linear-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class LinearProgressComponent {

	/** The forge-linear-progress element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Controls the determinate state. */
	@Input({ transform: booleanAttribute })
	public set determinate(value: LinearProgressComponentCustomElement['determinate']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.determinate = value;
		});
	}
	public get determinate(): LinearProgressComponentCustomElement['determinate'] {
		return this.nativeElement.determinate;
	}

	/** Controls the progress while in a determinate state. Accepts values from `0` to `1`. */
	@Input({ transform: numberAttribute })
	public set progress(value: LinearProgressComponentCustomElement['progress']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.progress = value;
		});
	}
	public get progress(): LinearProgressComponentCustomElement['progress'] {
		return this.nativeElement.progress;
	}

	/** Controls the buffer progress while in a determinate state. Accepts values from `0` to `1`. */
	@Input({ transform: numberAttribute })
	public set buffer(value: LinearProgressComponentCustomElement['buffer']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.buffer = value;
		});
	}
	public get buffer(): LinearProgressComponentCustomElement['buffer'] {
		return this.nativeElement.buffer;
	}

	/** Sets the theme. */
	@Input()
	public set theme(value: LinearProgressComponentCustomElement['theme']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.theme = value;
		});
	}
	public get theme(): LinearProgressComponentCustomElement['theme'] {
		return this.nativeElement.theme;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<LinearProgressComponentCustomElement>,
		protected zone: NgZone
	) {
		defineLinearProgressComponent();
		changeDetectorRef.detach();
	}
}
