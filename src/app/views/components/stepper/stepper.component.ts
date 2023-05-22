import { Component } from '@angular/core';
import { IStepConfiguration, StepperLayoutAlign, StepperLayoutMode } from '@tylertech/forge';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent {
  public selectedStepIndex = 2;
  public steps: IStepConfiguration[] = [
    { label: 'Step one', completed: true },
    { label: 'Step two', optionalLabel: 'Optional', completed: true, editable: true },
    { label: 'Step three' },
    { label: 'Step four' },
    { label: 'Done' }
  ];
  public linear = false;
  public alternative = false;
  public vertical = false;
  public layoutMode: StepperLayoutMode = 'fixed';
  public layoutAlign: StepperLayoutAlign = 'center';
  public toggleStep = true;

  public onStepChanged(evt: CustomEvent<number>): void {
    console.log('onStepChanged', evt.detail);
    this.selectedStepIndex = evt.detail;
  }

  public addStep(): void {
    const steps = this.steps.map(s => ({...s}));
     steps.push({label: (this.steps.length + 1).toString() + ' Step', completed: Math.round(Math.random()) === 0});
     this.steps = steps;
     this.selectedStepIndex = this.selectedStepIndex;
  }

  public removeStep(): void {
    this.steps = this.steps.slice(0, this.steps.length - 1);
  }
}
