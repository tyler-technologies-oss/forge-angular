// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { CircularProgressComponent as CircularProgressComponentCustomElement, defineCircularProgressComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-circular-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CircularProgressComponent {

	/** The forge-circular-progress element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Controls the determinate state. */
	@Input({ transform: booleanAttribute })
	public set determinate(value: CircularProgressComponentCustomElement['determinate']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.determinate = value;
		});
	}
	public get determinate(): CircularProgressComponentCustomElement['determinate'] {
		return this.nativeElement.determinate;
	}

	/** Controls the progress while in a determinate state. Accepts values from `0` to `1`. */
	@Input({ transform: numberAttribute })
	public set progress(value: CircularProgressComponentCustomElement['progress']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.progress = value;
		});
	}
	public get progress(): CircularProgressComponentCustomElement['progress'] {
		return this.nativeElement.progress;
	}

	/** Controls the theme of the progress indicator. */
	@Input()
	public set theme(value: CircularProgressComponentCustomElement['theme']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.theme = value;
		});
	}
	public get theme(): CircularProgressComponentCustomElement['theme'] {
		return this.nativeElement.theme;
	}

	/** Controls the visibility of the track background. */
	@Input({ transform: booleanAttribute })
	public set track(value: CircularProgressComponentCustomElement['track']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.track = value;
		});
	}
	public get track(): CircularProgressComponentCustomElement['track'] {
		return this.nativeElement.track;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<CircularProgressComponentCustomElement>,
		protected zone: NgZone
	) {
		defineCircularProgressComponent();
		changeDetectorRef.detach();
	}
}
