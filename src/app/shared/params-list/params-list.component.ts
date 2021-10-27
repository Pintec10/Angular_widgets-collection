import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-params-list',
  templateUrl: './params-list.component.html',
  styleUrls: ['./params-list.component.css']
})
export class ParamsListComponent implements OnInit {
  @Input() title: string = '';
  @Input() params: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
