import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { AppService } from '../app/app.service';

export class BaseComponent implements OnInit {
  private time:any;
  private subcCription:any;
  private app_service: AppService;

  constructor(public router: Router, public http: HttpClient) {
    this.app_service = new AppService(http);
  }

  async ngOnInit() {
    if(localStorage.access_token != null)
      this.subcCription = this.app_service.refreshToken()
      .subscribe(res => {
        localStorage.access_token = res['data']['access_token'];
        localStorage.refresh_token = res['data']['refresh_token'];
      }, err => {
        console.log(err)
      });
      this.time = setInterval(() => {
        this.subcCription = this.app_service.refreshToken()
        .subscribe(res => {
          localStorage.access_token = res['data']['access_token'];
          localStorage.refresh_token = res['data']['refresh_token'];
        }, err => {
          console.log(err)
        });
      }, 300000);

    //check user
    if(localStorage.access_token === undefined) {
      this.router.navigate(['/login']);
      return;
    }
  }

  ngOnDestroy()
  {
    clearInterval(this.time);
  }

}
