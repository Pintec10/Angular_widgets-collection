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

  segmentParams = [
    {
      name: 'icon header',
      type: 'HTML ng-content',
      description: 'icon and text displayed in the upper part of the segment, must be wrapped in an element (e.g. a div) with the property "icon-header-content". Example: <div icon-header-content><i class="pdf file outline icon"></i>No documents listed here</div>'
    },
    {
      name: 'lower content',
      type: 'HTML ng-content',
      description: 'content to display in the lower part of the segment, e.g. a button. Example: <button class="ui primary button">Add document</button>'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
