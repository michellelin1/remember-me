import { Component, OnInit } from '@angular/core';
import { CockroachdbService } from '../../services/cockroachdb.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss'],
})
export class FutureComponent implements OnInit {

  showResponses: boolean;
  rating : number;
  text: string;

  constructor(private cockroach: CockroachdbService) {
    this.showResponses = false;
    this.rating = 0;
    this.text = '';
  }

  ngOnInit() {}

  toggleResponses() {
    this.showResponses = true;
    // console.log(this.rating);
    // console.log(this.text);
    this.cockroach.submitResponse(this.rating, this.text);
  }

  // submitData() {
  //   this.cockroach.submitResponse(this.rating, this.text);
  // }

  // onIonChange(ev: Event) {
  //   this.rating = (ev as RangeCustomEvent).detail.value;
  // }

}
