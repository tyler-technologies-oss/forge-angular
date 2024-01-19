import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogServiceExampleComponent } from './dialog-service-example.component';
import { DemoCardComponent } from 'src/app/shared/components/demo-card/demo-card.component';
import { DialogServiceExampleRoutingModule } from './dialog-service-example-routing.module';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeDividerModule, ForgeTextFieldModule} from '@tylertech/forge-angular';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DialogServiceExampleComponent, DialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogServiceExampleRoutingModule,
    DemoCardComponent,
    ForgeButtonModule,
    ForgeTextFieldModule,
    ForgeDividerModule,
    ForgeCheckboxModule
  ]
})
export class DialogServiceExampleModule {}
