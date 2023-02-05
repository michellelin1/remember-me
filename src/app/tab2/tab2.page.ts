import { Component } from '@angular/core';
import { TwillioService } from '../services/twillio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sendTime:string = "";
  message:string;
  phoneNum:string;
  constructor(private twilio: TwillioService) {
    const d = new Date();
    this.sendTime = "";
    this.message = "";
    this.phoneNum = "";
  }

  sendMessage() {
    console.log(this.sendTime, this.message, this.phoneNum);
    if (this.sendTime === '') {
      this.sendTime = new Date().toISOString()
    }
    this.twilio.sendMessage(new Date(this.sendTime), this.phoneNum, this.message);
  }

}
