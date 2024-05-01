import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IExpansionPanelComponent, IListItemSelectEventData, IconRegistry } from '@tylertech/forge';
import { tylIconHome, tylIconSettings, tylIconSettingsInputComponent } from '@tylertech/tyler-icons/standard';

IconRegistry.define([
  tylIconHome,
  tylIconSettingsInputComponent,
  tylIconSettings
]);

export interface IMenuItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-sidenav',
  styleUrls: ['./sidenav.component.scss'],
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {
  public selectedPath: string;

  @ViewChild('componentExpansionPanel', { static: false, read: ElementRef })
  public componentExpansionPanel: ElementRef<IExpansionPanelComponent>;

  @ViewChild('exampleExpansionPanel', { static: false, read: ElementRef })
  public exampleExpansionPanel: ElementRef<IExpansionPanelComponent>;

  @Input()
  public open: boolean;
  public drawerType: string;
  public isSmallViewPort: boolean;

  @Output() public onClose = new EventEmitter();

  @HostListener('window:resize')
  public onResize(): void {
    this.updateViewportSize();
  }

  public componentMenuItems: IMenuItem[] = [
    { label: 'Accordion', value: '/component/accordion' },
    { label: 'Autocomplete', value: '/component/autocomplete' },
    { label: 'Avatar', value: '/component/avatar' },
    { label: 'Banner', value: '/component/banner' },
    { label: 'Bottom Sheet', value: '/component/bottom-sheet' },
    { label: 'Button', value: '/component/button' },
    { label: 'Checkbox', value: '/component/checkbox' },
    { label: 'Chip Field', value: '/component/chip-field' },
    { label: 'Chips', value: '/component/chips' },
    { label: 'Circular Progress', value: '/component/circular-progress' },
    { label: 'Date picker', value: '/component/date-picker' },
    { label: 'Date Range Picker', value: '/component/date-range-picker' },
    { label: 'Dialog', value: '/component/dialog' },
    { label: 'Expansion Panel', value: '/component/expansion-panel' },
    { label: 'Floating Action Button', value: '/component/floating-action-button' },
    { label: 'Icon', value: '/component/icon' },
    { label: 'Icon Button', value: '/component/icon-button' },
    { label: 'Inline Message', value: '/component/inline-message' },
    { label: 'Linear Progress', value: '/component/linear-progress' },
    { label: 'List', value: '/component/list' },
    { label: 'Menu', value: '/component/menu' },
    { label: 'Page State', value: '/component/page-state' },
    { label: 'Paginator', value: '/component/paginator' },
    { label: 'Popover', value: '/component/popover' },
    { label: 'Radio', value: '/component/radio' },
    { label: 'Scaffold', value: '/component/scaffold' },
    { label: 'Select', value: '/component/select' },
    { label: 'Slider', value: '/component/slider' },
    { label: 'Split View', value: '/component/split-view' },
    { label: 'Stepper', value: '/component/stepper' },
    { label: 'Switch', value: '/component/switch' },
    { label: 'Tab Bar', value: '/component/tab-bar' },
    { label: 'Table', value: '/component/table' },
    { label: 'Text Field', value: '/component/text-field' },
    { label: 'Time Picker', value: '/component/time-picker' },
    { label: 'Toast', value: '/component/toast' },
    { label: 'Tooltip', value: '/component/tooltip' },
    { label: 'View Switcher', value: '/component/view-switcher' }
  ];

  public exampleMenuItems: IMenuItem[] = [
    { label: 'Dialog Service', value: '/example/dialog-service' },
    { label: 'Expansion panel', value: '/example/expansion-panel' },
    { label: 'Reactive form', value: '/example/reactive-form' },
    { label: 'Table', value: '/example/table' },
    { label: 'Toolbar', value: '/example/toolbar-example' },
    { label: 'Two column layout', value: '/example/two-column-grid' }
  ];

  constructor(private _router: Router, private _location: Location, private _cd: ChangeDetectorRef) {
    this.open = window.innerWidth > 750;
  }

  public updateViewportSize(): void {
    if (window.innerWidth < 750) {
      this.isSmallViewPort = true;
    } else {
      this.isSmallViewPort = false;
    }
  }

  public openSidenav(): void {
    this.open = true;
  }

  public closeSidenav(): void {
    this.open = false;
    this.onClose.emit();
  }

  public handleResize(): void {
    this.open = !this.isSmallViewPort;
  }

  public ngOnInit(): void {
    this.updateViewportSize();
    this.handleResize();

    window.requestAnimationFrame(() => {
      if (!this.open) {
        this.onClose.emit();
      }
    });
  }

  public ngAfterViewInit(): void {
    const path = this._location.path() || '/';
    this.selectedPath = path;
    this._cd.detectChanges();

    // Automatically expand a menu item if the active menu item exists within it
    if (path.match(/^\/component\//)) {
      this.componentExpansionPanel.nativeElement.open = true;
    } else if (path.match(/^\/example\//)) {
      this.exampleExpansionPanel.nativeElement.open = true;
    }
  }

  public onMenuItemSelected(evt: CustomEvent<IListItemSelectEventData>): void {
    const path = (evt.detail as IListItemSelectEventData<string>).value;
    if (path === undefined) {
      return;
    }
    if (this.isSmallViewPort && this.open) {
      this.closeSidenav();
    }
    this.selectedPath = path;
    this._router.navigateByUrl(path);
  }
}
