import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as twilio from 'twilio';

@Injectable({
  providedIn: 'root'
})
export class TwillioService {

  constructor(private http: HttpClient) { }

  sendMessage(time:Date, phoneNum:string, message:string) {
    const data = {
      scheduleTime: time, phoneNum: phoneNum, message: message
    }
    this.http.post("http://localhost:3001/scheduleMessage", data).subscribe(res => console.log(res))
  }
}
