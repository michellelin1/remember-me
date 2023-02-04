import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sendTime:string;
  message:string;
  phoneNum:string;
  constructor() {
    const d = new Date();
    this.sendTime = d.toISOString();
    this.message = "";
    this.phoneNum = "";
  }

  sendMessage() {
    console.log(this.sendTime, this.message, this.phoneNum);
  }

}
