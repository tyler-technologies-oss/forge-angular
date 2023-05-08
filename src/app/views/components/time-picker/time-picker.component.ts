import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { mergeDateWithTime } from '@tylertech/forge';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  public time: string = '23:40';
  public combinedDate: Date | null = new Date();
  public form: UntypedFormGroup;

  constructor(private _fb: UntypedFormBuilder) {
    this.form = this._fb.group({
      time: ['17:34:13', Validators.required],
      date: [this.combinedDate, Validators.required]
    });
    this.combinedDate = mergeDateWithTime(this.combinedDate as Date, this.timeControl.value, true);
  }

  public ngOnInit(): void {
    // An example of how to keep a backing model Date object in sync with a date picker and time picker using values from both
    this.timeControl.valueChanges.subscribe(value => {
      this.combinedDate = new Date(mergeDateWithTime(this.combinedDate as Date, value, true));
    });
    this.dateControl.valueChanges.subscribe(value => {
      this.combinedDate = value;
      if (this.timeControl.value) {
        this.combinedDate = new Date(mergeDateWithTime(this.combinedDate as Date, this.timeControl.value, true));
      }
    });
  }

  public get timeControl(): AbstractControl {
    return this.form.controls['time'];
  }

  public get dateControl(): AbstractControl {
    return this.form.controls['date'];
  }
}
