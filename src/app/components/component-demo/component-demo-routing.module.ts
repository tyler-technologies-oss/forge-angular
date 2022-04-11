import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentDemoComponent } from './component-demo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ComponentDemoComponent },
  { path: 'accordion', loadChildren: () => import('../../views/components/accordion/accordion.module').then(m => m.AccordionModule) },
  { path: 'autocomplete', loadChildren: () => import('../../views/components/autocomplete/autocomplete.module').then(m => m.AutocompleteModule) },
  { path: 'banner', loadChildren: () => import('../../views/components/banner/banner.module').then(m => m.BannerModule) },
  { path: 'bottom-sheet', loadChildren: () => import('../../views/components/bottom-sheet/bottom-sheet.module').then(m => m.BottomSheetModule) },
  { path: 'busy-indicator', loadChildren: () => import('../../views/components/busy-indicator/busy-indicator.module').then(m => m.BusyIndicatorModule) },
  { path: 'button', loadChildren: () => import('../../views/components/button/button.module').then(m => m.ButtonModule) },
  { path: 'checkbox', loadChildren: () => import('../../views/components/checkbox/checkbox.module').then(m => m.CheckboxModule) },
  { path: 'chip-field', loadChildren: () => import('../../views/components/chip-field/chip-field.module').then(m => m.ChipFieldModule) },
  { path: 'chips', loadChildren: () => import('../../views/components/chips/chips.module').then(m => m.ChipsModule) },
  { path: 'avatar', loadChildren: () => import('../../views/components/avatar/avatar.module').then(m => m.AvatarModule) },
  { path: 'date-picker', loadChildren: () => import('../../views/components/date-picker/date-picker.module').then(m => m.DatePickerModule) },
  { path: 'date-range-picker', loadChildren: () => import('../../views/components/date-range-picker/date-range-picker.module').then(m => m.DateRangePickerModule) },
  { path: 'dialog', loadChildren: () => import('../../views/components/dialog/dialog.module').then(m => m.DialogModule) },
  { path: 'page-state', loadChildren: () => import('../../views/components/page-state/page-state.module').then(m => m.PageStateModule) },
  { path: 'expansion-panel', loadChildren: () => import('../../views/components/expansion-panel/expansion-panel.module').then(m => m.ExpansionPanelModule) },
  { path: 'floating-action-button', loadChildren: () => import('../../views/components/floating-action-button/floating-action-button.module').then(m => m.FloatingActionButtonModule) },
  { path: 'icon', loadChildren: () => import('../../views/components/icon/icon.module').then(m => m.IconModule) },
  { path: 'icon-button', loadChildren: () => import('../../views/components/icon-button/icon-button.module').then(m => m.IconButtonModule) },
  { path: 'inline-message', loadChildren: () => import('../../views/components/inline-message/inline-message.module').then(m => m.InlineMessageModule) },
  { path: 'linear-progress', loadChildren: () => import('../../views/components/linear-progress/linear-progress.module').then(m => m.LinearProgressModule) },
  { path: 'menu', loadChildren: () => import('../../views/components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'paginator', loadChildren: () => import('../../views/components/paginator/paginator.module').then(m => m.PaginatorModule) },
  { path: 'popup', loadChildren: () => import('../../views/components/popup/popup.module').then(m => m.PopupModule) },
  { path: 'progress-spinner', loadChildren: () => import('../../views/components/progress-spinner/progress-spinner.module').then(m => m.ProgressSpinnerModule) },
  { path: 'quantity-field', loadChildren: () => import('../../views/components/quantity-field/quantity-field.module').then(m => m.QuantityFieldModule) },
  { path: 'radio', loadChildren: () => import('../../views/components/radio/radio.module').then(m => m.RadioModule) },
  { path: 'scaffold', loadChildren: () => import('../../views/components/scaffold/scaffold.module').then(m => m.ScaffoldModule) },
  { path: 'select', loadChildren: () => import('../../views/components/select/select.module').then(m => m.SelectModule) },
  { path: 'slider', loadChildren: () => import('../../views/components/slider/slider.module').then(m => m.SliderModule) },
  { path: 'stepper', loadChildren: () => import('../../views/components/stepper/stepper.module').then(m => m.StepperModule) },
  { path: 'switch', loadChildren: () => import('../../views/components/switch/switch.module').then(m => m.SwitchModule) },
  { path: 'tab-bar', loadChildren: () => import('../../views/components/tab-bar/tab-bar.module').then(m => m.TabBarModule) },
  { path: 'table', loadChildren: () => import('../../views/components/table/table.module').then(m => m.TableModule) },
  { path: 'text-field', loadChildren: () => import('../../views/components/text-field/text-field.module').then(m => m.TextFieldModule) },
  { path: 'time-picker', loadChildren: () => import('../../views/components/time-picker/time-picker.module').then(m => m.TimePickerModule) },
  { path: 'toast', loadChildren: () => import('../../views/components/toast/toast.module').then(m => m.ToastModule) },
  { path: 'tooltip', loadChildren: () => import('../../views/components/tooltip/tooltip.module').then(m => m.TooltipModule) },
  { path: 'view-switcher', loadChildren: () => import('../../views/components/view-switcher/view-switcher.module').then(m => m.ViewSwitcherModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentDemoRoutingModule {}
