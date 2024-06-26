// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, numberAttribute, Input } from '@angular/core';
import { StepComponent as StepComponentCustomElement, defineStepComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class StepComponent {

	/** The forge-step element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Whether the step is in the alternative style. */
	@Input({ transform: booleanAttribute })
	public set alternative(value: StepComponentCustomElement['alternative']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.alternative = value;
		});
	}
	public get alternative(): StepComponentCustomElement['alternative'] {
		return this.nativeElement.alternative;
	}

	/** The index of the step. */
	@Input({ transform: numberAttribute })
	public set index(value: StepComponentCustomElement['index']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.index = value;
		});
	}
	public get index(): StepComponentCustomElement['index'] {
		return this.nativeElement.index;
	}

	/** Whether the step is editable. */
	@Input({ transform: booleanAttribute })
	public set editable(value: StepComponentCustomElement['editable']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.editable = value;
		});
	}
	public get editable(): StepComponentCustomElement['editable'] {
		return this.nativeElement.editable;
	}

	/** Whether the step is completed. */
	@Input({ transform: booleanAttribute })
	public set completed(value: StepComponentCustomElement['completed']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.completed = value;
		});
	}
	public get completed(): StepComponentCustomElement['completed'] {
		return this.nativeElement.completed;
	}

	/** Whether the step has an error. */
	@Input({ transform: booleanAttribute })
	public set error(value: StepComponentCustomElement['error']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.error = value;
		});
	}
	public get error(): StepComponentCustomElement['error'] {
		return this.nativeElement.error;
	}

	/** Whether the step is selected. */
	@Input({ transform: booleanAttribute })
	public set selected(value: StepComponentCustomElement['selected']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.selected = value;
		});
	}
	public get selected(): StepComponentCustomElement['selected'] {
		return this.nativeElement.selected;
	}

	/** Whether the step is disabled. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: StepComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): StepComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Whether the step is in vertical mode. */
	@Input({ transform: booleanAttribute })
	public set vertical(value: StepComponentCustomElement['vertical']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.vertical = value;
		});
	}
	public get vertical(): StepComponentCustomElement['vertical'] {
		return this.nativeElement.vertical;
	}

	/** Whether the step is expanded. */
	@Input({ transform: booleanAttribute })
	public set expanded(value: StepComponentCustomElement['expanded']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.expanded = value;
		});
	}
	public get expanded(): StepComponentCustomElement['expanded'] {
		return this.nativeElement.expanded;
	}

	/** Whether the step should ignore user expansion. */
	@Input({ transform: booleanAttribute })
	public set ignoreUserExpansion(value: StepComponentCustomElement['ignoreUserExpansion']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.ignoreUserExpansion = value;
		});
	}
	public get ignoreUserExpansion(): StepComponentCustomElement['ignoreUserExpansion'] {
		return this.nativeElement.ignoreUserExpansion;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<StepComponentCustomElement>,
		protected zone: NgZone
	) {
		defineStepComponent();
		changeDetectorRef.detach();
	}
}
