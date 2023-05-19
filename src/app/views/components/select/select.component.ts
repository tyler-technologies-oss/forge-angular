import { Component } from '@angular/core';
import { SelectBeforeValueChangeCallback } from '@tylertech/forge';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {
  public selected = 'grains';
  public selectedValues = ['grains'];
  public selectedOutlined = 'grains';
  public selectedValuesOutlined = ['grains'];

  public beforeValueChange: SelectBeforeValueChangeCallback<string> = value => {
    return value !== 'fruit';
  };

  public beforeValueChangeMultiple: SelectBeforeValueChangeCallback<string> = value => {
    return !value.includes('fruit');
  };
}
