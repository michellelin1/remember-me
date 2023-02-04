import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent implements OnInit {

  response:string[] = ["res 1", "res 2", "res 3", "res 4"];
  @Input() type:string = "";
  constructor() {
  }

  ngOnInit() {
  }

}
