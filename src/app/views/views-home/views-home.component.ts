import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 4.7, label: 'Score' },
    { value: 57, label: 'Reviews' },
    { value: 312, label: 'Downloads' }
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'An economic and accordingly comfortable sofa'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'A basic but sturdy dresser to store your clothes'
    }
  ];

  statisticsParams = [
    {
      name: 'data',
      type: 'array of objects',
      description: 'each object represents one entry, and must have a value and a label as keys. Example: { value: 4.7, label: "Score" }'
    }
  ];

  itemsListParams = [
    {
      name: 'items',
      type: 'array of objects',
      description: 'each object represents one entry, and must have the keys: image, title, description. Example: { image: "/assets/images/couch.jpeg", title: "Couch", description: "An economic and accordingly comfortable sofa" }'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}