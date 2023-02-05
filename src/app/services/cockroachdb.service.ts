import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { RangeValue } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class CockroachdbService {

  private expressBaseUrl:string = 'http://localhost:3001/';
  constructor(private http: HttpClient) { }

  submitResponse(feeling:number, response:string) {
    console.log(feeling, response);
    console.log('Cockroach service!');
    const data = {
        feeling: feeling, response: response
    }
    this.http.post(this.expressBaseUrl+"submitResponse", data).subscribe(res => console.log(res));
  }

  getResponse(feeling:number, response:string) {
    this.http.post(this.expressBaseUrl+"getResponse", {feeling, response}).subscribe(res => console.log(res));
  }
}
