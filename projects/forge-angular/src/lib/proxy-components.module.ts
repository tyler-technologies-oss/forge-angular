import { NgModule } from '@angular/core';

import { ForgeAccordionModule } from './accordion';
import { ForgeAppBarModule } from './app-bar';
import { ForgeAppBarHelpButtonModule } from './app-bar-help-button';
import { ForgeAppBarMenuButtonModule } from './app-bar-menu-button';
import { ForgeAppBarNotificationButtonModule } from './app-bar-notification-button';
import { ForgeAppBarProfileButtonModule } from './app-bar-profile-button';
import { ForgeAppBarSearchModule } from './app-bar-search';
import { ForgeAutocompleteProxyModule } from './autocomplete';
import { ForgeAvatarModule } from './avatar';
import { ForgeBackdropModule } from './backdrop';
import { ForgeBadgeModule } from './badge';
import { ForgeBannerModule } from './banner';
import { ForgeBottomSheetModule } from './bottom-sheet';
import { ForgeBusyIndicatorModule } from './busy-indicator';
import { ForgeButtonModule } from './button';
import { ForgeButtonToggleProxyModule } from './button-toggle';
import { ForgeButtonToggleGroupModule } from './button-toggle-group';
import { ForgeCalendarModule } from './calendar';
import { ForgeCardModule } from './card';
import { ForgeCheckboxModule } from './checkbox';
import { ForgeChipProxyModule } from './chip';
import { ForgeChipFieldModule } from './chip-field';
import { ForgeChipSetModule } from './chip-set';
import { ForgeCircularProgressModule } from './circular-progress';
import { ForgeColorPickerModule } from './color-picker';
import { ForgeDatePickerProxyModule } from './date-picker';
import { ForgeDateRangePickerProxyModule } from './date-range-picker';
import { ForgeDialogModule } from './dialog';
import { ForgeDividerModule } from './divider';
import { ForgeDrawerModule } from './drawer';
import { ForgeExpansionPanelModule } from './expansion-panel';
import { ForgeFloatingActionButtonModule } from './fab';
import { ForgeFilePickerModule } from './file-picker';
import { ForgeIconModule } from './icon';
import { ForgeIconButtonModule } from './icon-button';
import { ForgeInlineMessageModule } from './inline-message';
import { ForgeKeyboardShortcutModule } from './keyboard-shortcut';
import { ForgeLabelValueModule } from './label-value';
import { ForgeLinearProgressModule } from './linear-progress';
import { ForgeListModule } from './list';
import { ForgeListItemModule } from './list-item';
import { ForgeMenuModule } from './menu';
import { ForgeMiniDrawerModule } from './mini-drawer';
import { ForgeModalDrawerModule } from './modal-drawer';
import { ForgeOpenIconModule } from './open-icon';
import { ForgeOptionModule } from './option';
import { ForgeOptionGroupModule } from './option-group';
import { ForgePageStateModule } from './page-state';
import { ForgePaginatorModule } from './paginator';
import { ForgePopupProxyModule } from './popup';
import { ForgeProductIconModule } from './product-icon';
import { ForgeProfileCardModule } from './profile-card';
import { ForgeQuantityFieldModule } from './quantity-field';
import { ForgeRadioModule } from './radio';
import { ForgeRippleModule } from './ripple';
import { ForgeScaffoldModule } from './scaffold';
import { ForgeSelectProxyModule } from './select';
import { ForgeSelectDropdownModule } from './select-dropdown';
import { ForgeSkeletonModule } from './skeleton';
import { ForgeSliderProxyModule } from './slider';
import { ForgeStepModule } from './step';
import { ForgeStepperModule } from './stepper';
import { ForgeSwitchProxyModule } from './switch';
import { ForgeTabModule } from './tab';
import { ForgeTabBarModule } from './tab-bar';
import { ForgeTableModule } from './table';
import { ForgeTextFieldModule } from './text-field';
import { ForgeTimePickerProxyModule } from './time-picker';
import { ForgeToastModule } from './toast';
import { ForgeToolbarModule } from './toolbar';
import { ForgeTooltipModule } from './tooltip';
import { ForgeViewModule } from './view';
import { ForgeViewSwitcherModule } from './view-switcher';

export const proxyModules = [
    ForgeAccordionModule,
    ForgeAppBarModule,
    ForgeAppBarHelpButtonModule,
    ForgeAppBarMenuButtonModule,
    ForgeAppBarNotificationButtonModule,
    ForgeAppBarProfileButtonModule,
    ForgeAppBarSearchModule,
    ForgeAutocompleteProxyModule,
    ForgeAvatarModule,
    ForgeBackdropModule,
    ForgeBadgeModule,
    ForgeBannerModule,
    ForgeBottomSheetModule,
    ForgeBusyIndicatorModule,
    ForgeButtonModule,
    ForgeButtonToggleProxyModule,
    ForgeButtonToggleGroupModule,
    ForgeCalendarModule,
    ForgeCardModule,
    ForgeCheckboxModule,
    ForgeChipProxyModule,
    ForgeChipFieldModule,
    ForgeChipSetModule,
    ForgeCircularProgressModule,
    ForgeColorPickerModule,
    ForgeDatePickerProxyModule,
    ForgeDateRangePickerProxyModule,
    ForgeDialogModule,
    ForgeDividerModule,
    ForgeDrawerModule,
    ForgeExpansionPanelModule,
    ForgeFloatingActionButtonModule,
    ForgeFilePickerModule,
    ForgeIconModule,
    ForgeIconButtonModule,
    ForgeInlineMessageModule,
    ForgeKeyboardShortcutModule,
    ForgeLabelValueModule,
    ForgeLinearProgressModule,
    ForgeListModule,
    ForgeListItemModule,
    ForgeMenuModule,
    ForgeMiniDrawerModule,
    ForgeModalDrawerModule,
    ForgeOpenIconModule,
    ForgeOptionModule,
    ForgeOptionGroupModule,
    ForgePageStateModule,
    ForgePaginatorModule,
    ForgePopupProxyModule,
    ForgeProductIconModule,
    ForgeProfileCardModule,
    ForgeQuantityFieldModule,
    ForgeRadioModule,
    ForgeRippleModule,
    ForgeScaffoldModule,
    ForgeSelectProxyModule,
    ForgeSelectDropdownModule,
    ForgeSkeletonModule,
    ForgeSliderProxyModule,
    ForgeStepModule,
    ForgeStepperModule,
    ForgeSwitchProxyModule,
    ForgeTabModule,
    ForgeTabBarModule,
    ForgeTableModule,
    ForgeTextFieldModule,
    ForgeTimePickerProxyModule,
    ForgeToastModule,
    ForgeToolbarModule,
    ForgeTooltipModule,
    ForgeViewModule,
    ForgeViewSwitcherModule
];

@NgModule({
  imports: [ ...proxyModules ],
  exports: [ ...proxyModules ]
})
export class ProxyComponentsModule {}
