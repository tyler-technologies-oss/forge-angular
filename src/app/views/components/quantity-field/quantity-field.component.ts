import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-field',
  templateUrl: './quantity-field.component.html',
  styleUrls: ['./quantity-field.component.scss']
})
export class QuantityFieldComponent implements OnInit {

  public value = 10;

  constructor() { }

  public ngOnInit(): void { }

}
