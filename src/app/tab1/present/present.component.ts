import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss'],
})
export class PresentComponent implements OnInit {

  showResponses: boolean;

  constructor() {
    this.showResponses = false;
  }

  ngOnInit() {}

  toggleResponses() {
    this.showResponses = true;
  }

}
