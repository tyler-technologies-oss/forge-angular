import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AccordionComponent } from './views/components/accordion/accordion.component';
import { AutocompleteComponent } from './views/components/autocomplete/autocomplete.component';
import { BannerComponent } from './views/components/banner/banner.component';
import { BottomSheetComponent } from './views/components/bottom-sheet/bottom-sheet.component';
import { ChipsComponent } from './views/components/chips/chips.component';
import { InlineMessageComponent } from './views/components/inline-message/inline-message.component';
import { SplitViewComponent } from './views/components/split-view/split-view.component';
import { AvatarComponent } from './views/components/avatar/avatar.component';
import { DialogComponent } from './views/components/dialog/dialog.component';
import { ListComponent } from './views/components/list/list.component';
import { SliderComponent } from './views/components/slider/slider.component';
import { LinearProgressComponent } from './views/components/linear-progress/linear-progress.component';
import { SelectComponent } from './views/components/select/select.component';
import { ChipFieldComponent } from './views/components/chip-field/chip-field.component';
import { CircularProgressComponent } from './views/components/circular-progress/circular-progress.component';
import { ToastComponent } from './views/components/toast/toast.component';
import { TextFieldComponent } from './views/components/text-field/text-field.component';
import { IconComponent } from './views/components/icon/icon.component';
import { ScaffoldComponent } from './views/components/scaffold/scaffold.component';
import { PopoverComponent } from './views/components/popover/popover.component';
import { TabBarComponent } from './views/components/tab-bar/tab-bar.component';
import { StepperComponent } from './views/components/stepper/stepper.component';
import { SwitchComponent } from './views/components/switch/switch.component';
import { TableComponent } from './views/components/table/table.component';
import { TooltipComponent } from './views/components/tooltip/tooltip.component';
import { ViewSwitcherComponent } from './views/components/view-switcher/view-switcher.component';
import { PaginatorComponent } from './views/components/paginator/paginator.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { RadioComponent } from './views/components/radio/radio.component';
import { PageStateComponent } from './views/components/page-state/page-state.component';
import { ExpansionPanelComponent } from './views/components/expansion-panel/expansion-panel.component';
import { FloatingActionButtonComponent } from './views/components/floating-action-button/floating-action-button.component';
import { DatePickerComponent } from './views/components/date-picker/date-picker.component';
import { DateRangePickerComponent } from './views/components/date-range-picker/date-range-picker.component';
import { ButtonComponent } from './views/components/button/button.component';
import { CheckboxComponent } from './views/components/checkbox/checkbox.component';
import { TimePickerComponent } from './views/components/time-picker/time-picker.component';
import { IconButtonComponent } from './views/components/icon-button/icon-button.component';
import { ReactiveFormExampleComponent } from './views/examples/reactive-form-example/reactive-form-example.component';
import { TableExampleComponent } from './views/examples/table-example/table-example.component';
import { ExpansionPanelExamplesComponent } from './views/examples/expansion-panel-examples/expansion-panel-examples.component';
import { ToolbarExampleComponent } from './views/examples/toolbar-example/toolbar-example.component';
import { DialogServiceExampleComponent } from './views/examples/dialog-service-example/dialog-service-example.component';
import { TwoColumnGridComponent } from './views/examples/two-column-grid/two-column-grid.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'component', children: [
    { path: 'autocomplete', component: AutocompleteComponent },
    { path: 'banner', component: BannerComponent },
    { path: 'bottom-sheet', component: BottomSheetComponent },
    { path: 'chips', component: ChipsComponent },
    { path: 'inline-message', component: InlineMessageComponent },
    { path: 'split-view', component: SplitViewComponent },
    { path: 'avatar', component: AvatarComponent },
    { path: 'dialog', component: DialogComponent },
    { path: 'list', component: ListComponent },
    { path: 'slider', component: SliderComponent },
    { path: 'linear-progress', component: LinearProgressComponent },
    { path: 'select', component: SelectComponent },
    { path: 'chip-field', component: ChipFieldComponent },
    { path: 'circular-progress', component: CircularProgressComponent },
    { path: 'toast', component: ToastComponent },
    { path: 'text-field', component: TextFieldComponent },
    { path: 'accordion', component: AccordionComponent },
    { path: 'icon', component: IconComponent },
    { path: 'chips', component: ChipsComponent },
    { path: 'scaffold', component: ScaffoldComponent },
    { path: 'popover', component: PopoverComponent },
    { path: 'tab-bar', component: TabBarComponent },
    { path: 'stepper', component: StepperComponent },
    { path: 'switch', component: SwitchComponent },
    { path: 'table', component: TableComponent },
    { path: 'tooltip', component: TooltipComponent },
    { path: 'view-switcher', component: ViewSwitcherComponent },
    { path: 'paginator', component: PaginatorComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'radio', component: RadioComponent },
    { path: 'page-state', component: PageStateComponent },
    { path: 'expansion-panel', component: ExpansionPanelComponent },
    { path: 'floating-action-button', component: FloatingActionButtonComponent },
    { path: 'date-picker', component: DatePickerComponent },
    { path: 'date-range-picker', component: DateRangePickerComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'time-picker', component: TimePickerComponent },
    { path: 'icon-button', component: IconButtonComponent }
  ]},
  { path: 'example', children: [
    { path: 'reactive-form', component: ReactiveFormExampleComponent },
    { path: 'table', component: TableExampleComponent },
    { path: 'expansion-panel', component: ExpansionPanelExamplesComponent },
    { path: 'toolbar-example', component: ToolbarExampleComponent },
    { path: 'dialog-service', component: DialogServiceExampleComponent },
    { path: 'two-column-grid', component: TwoColumnGridComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
