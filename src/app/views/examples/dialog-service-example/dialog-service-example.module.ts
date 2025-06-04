import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogServiceExampleComponent } from './dialog-service-example.component';
import { DemoCardComponent } from 'src/app/shared/components/demo-card/demo-card.component';
import { DialogServiceExampleRoutingModule } from './dialog-service-example-routing.module';
import { ForgeButtonModule, ForgeCheckboxModule, ForgeDividerModule, ForgeTextFieldModule, ForgeToolbarModule} from '@tylertech/forge-angular';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { CountDownDialogComponent } from './count-down-dialog/count-down-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DialogServiceExampleRoutingModule,
        DemoCardComponent,
        ForgeButtonModule,
        ForgeTextFieldModule,
        ForgeDividerModule,
        ForgeCheckboxModule,
        ForgeToolbarModule,
        DialogServiceExampleComponent, DialogComponent, CountDownDialogComponent
    ]
})
export class DialogServiceExampleModule {}
