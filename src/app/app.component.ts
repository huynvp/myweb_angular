import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent implements OnInit{
  private time:any;
  private subcCription:any;

  constructor(private app_service:AppService) {
  }

  ngOnInit() {
    if(localStorage.access_token != null)
      this.time = setInterval(() => {
        this.subcCription = this.app_service.refreshToken()
        .subscribe(res => {
          localStorage.access_token = res['data']['access_token'];
          localStorage.refresh_token = res['data']['refresh_token'];
        }, err => {
          console.log(err)
        });
      }, 15000);
  }
}
