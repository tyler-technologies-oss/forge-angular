import { Component } from '@angular/core';
import { ForgeCardModule } from '@tylertech/forge-angular';

@Component({
    standalone: true,
    selector: 'example-popup',
    template: `<forge-card>Example Popup</forge-card>`,
    imports: [ForgeCardModule]
})
export class ExamplePopupComponent { }
