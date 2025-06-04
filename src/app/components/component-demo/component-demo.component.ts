import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-component-demo',
    templateUrl: './component-demo.component.html',
    styleUrls: ['./component-demo.component.scss'],
    standalone: false
})
export class ComponentDemoComponent {
  @Input('name')
  public componentName?: string;
}
