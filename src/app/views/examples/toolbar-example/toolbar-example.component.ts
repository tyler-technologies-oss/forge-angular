import { Component } from '@angular/core';

interface IFeedbackData {
  title: string;
  from: string;
  date: string;
  type: string;
  details: string;
}

const data: IFeedbackData[] = [
  {
    title: 'Great presentation',
    from: 'Employee name',
    date: '00/00/2020',
    type: 'Praise',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    title: 'Excellent group communication',
    from: 'Employee name',
    date: '00/00/2020',
    type: 'Praise',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    title: 'Teamwork!',
    from: 'Employee name',
    date: '00/00/2020',
    type: 'Praise',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  }
];

@Component({
  selector: 'app-toolbar-example',
  templateUrl: './toolbar-example.component.html',
  styleUrls: ['./toolbar-example.component.scss']
})

export class ToolbarExampleComponent {
  public feedbackData = data;
}
