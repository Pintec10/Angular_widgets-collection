import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  tableData = [
    {
      name: "Pablo",
      age: "32",
      job: "Baker",
      employed: true
    },
    {
      name: "Lucy",
      age: "41",
      job: "Civil servant",
      employed: true
    },
    {
      name: "Jakub",
      age: "29",
      job: "Actor",
      employed: false
    }
  ];

  tableHeaders = [
    {
      key: "name",
      label: "Name"
    },
    {
      key: "age",
      label: "Age"
    },
    {
      key: "job",
      label: "Job"
    },
    {
      key: "employed",
      label: "Employed?"
    }

  ];

  tableParams = [
    {
      name: 'data',
      type: 'array of objects',
      description: 'the content of the table. Each object corresponds to a line and contains key/value pairs for each column. The keys must be the same defined in the "headers" param'
    },
    {
      name: 'headers',
      type: 'array of objects',
      description: 'the columns of the table. Each object correspond to one column and has key/value pairs for "key" and "label"'
    },
    {
      name: 'classNames',
      type: 'string',
      description: 'a string containing the Semantic UI (or custom) class names to apply, separated by spaces. Example: "striped celled"'
    }
  ];

  tabsParams = [
    {
      name: 'router links',
      type: 'child HTML content',
      description: 'a series of <a> tags for the routing links; each must have the "item" class. Example: <a class="item" routerLink="./companies" routerLinkActive="active">Companies</a>'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
