import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items = [
    {
      title: 'Lorem?',
      content: 'Voluptates aliquam fugiat provident. Ex nobis odio, sequi corporis labore similique libero placeat quaerat iure nemo consectetur ipsum odit recusandae cupiditate in!'
    },
    {
      title: 'Ipsum!',
      content: 'Voluptates, nemo explicabo quo esse quisquam modi perspiciatis, quasi, debitis ipsum expedita cum ratione veniam porro ut.'
    },
    {
      title: 'Dolor sit...',
      content: 'Nostrum sapiente amet harum ipsum vel, non omnis mollitia eveniet culpa neque modi corporis dolor magnam officiis, alias odit repellat deserunt quis!'
    },
  ];


  modalParams = [
    {
      name: 'modal content',
      type: 'Child HTML content',
      description: 'the content of the modal. Example: <p>lorem ipsum...</p>'
    },
    {
      name: 'modal title',
      type: 'Child HTML content',
      description: 'the title of the modal. It must be wrapped in an HTML element with the property "modalTitle". Example: <span modalTitle>Ipsum Lorem</span>'
    }
  ];

  accordionParams = [
    {
      name: 'items',
      type: 'array of objects',
      description: 'each object must have "title" and "content" keys. Example: {title: "Lorem?", content: "Voluptates aliquam..."}'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
