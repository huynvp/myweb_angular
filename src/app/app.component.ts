import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myweb';

  private header:HttpHeaders;

  private time:any;
  private token:string;

  constructor(public http:HttpClient) {
    this.token = localStorage.token;
  }

  ngOnInit() {
    this.time = setInterval(() => {
      // console.log(this.header)
      if(this.token !== null) {
        this.header = new HttpHeaders({
          'content-type': 'application/json',
          'token': this.token
        });
      }
      this.http.post(`${environment.baseUrl}/user/refresh-token`, null, {headers: this.header})
      .toPromise()
      .then(res => {
        console.log(res);
        localStorage.token = res['data']['token'];
        this.token = res['data']['token'];
      })
      .catch(err => {
        console.log(err)
      });
      // clearInterval(i)
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.time);
  }
}
