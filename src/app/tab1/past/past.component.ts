import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss'],
})
export class PastComponent implements OnInit {

  showResponses: boolean;

  constructor() {
    this.showResponses = false;
  }

  ngOnInit() {}

  toggleResponses() {
    this.showResponses = true;
  }

}
