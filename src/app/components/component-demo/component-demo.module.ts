import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentDemoRoutingModule } from './component-demo-routing.module';
import { ComponentDemoComponent } from './component-demo.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentDemoRoutingModule,
        ComponentDemoComponent
    ]
})
export class ComponentDemoModule { }
