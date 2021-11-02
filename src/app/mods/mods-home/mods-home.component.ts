import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

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
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
