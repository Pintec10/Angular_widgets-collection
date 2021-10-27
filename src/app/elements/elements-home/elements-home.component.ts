import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css']
})
export class ElementsHomeComponent implements OnInit {
  placeholderParams = [
    {
      name: 'showHeader',
      type: 'boolean',
      description: 'show/hide the header section on top'
    },
    {
      name: 'lines',
      type: 'number',
      description: 'number of lines to show in the paragraph section at the bottom'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
