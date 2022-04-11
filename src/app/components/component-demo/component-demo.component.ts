import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.scss']
})
export class ComponentDemoComponent implements OnInit {
  public componentName: string;

  constructor(private _activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this._activatedRoute.params.subscribe(p => this.componentName = p['name']);
  }

}
