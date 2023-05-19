import { Component, OnInit } from '@angular/core';
import { IDatePickerRange } from '@tylertech/forge';

@Component({
  selector: 'app-date-range-picker-simple',
  templateUrl: './date-range-picker-simple.component.html',
  styleUrls: ['./date-range-picker-simple.component.scss']
})
export class DateRangePickerSimpleComponent implements OnInit {

  public fromDate: string | Date;
  public toDate: string | Date;
  public valueMode: 'object' | 'string' | 'iso-string' = 'object';
  public isDisabled = false;

  constructor() { }

  public ngOnInit(): void {
    this.fromDate = this._getDateWithDayOffset(-5);
    this.toDate = this._getDateWithDayOffset(5);
  }

  public onChange($event: CustomEvent): void {
    this.fromDate = $event.detail.from;
    this.toDate = $event.detail.to;
  }

  public onOpened(): void {
    console.log('Calendar opened');
  }

  public onClosed(): void {
    console.log('Calendar closed');
  }

  private _getDateWithDayOffset(dayOffset: number): Date {
    const date = new Date();
    return new Date(date.setDate(date.getDate() + dayOffset));
  }

}
