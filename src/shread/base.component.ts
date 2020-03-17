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
    if(localStorage.access_token != null) {
      this.time = setInterval(() => {
        this.subcCription = this.app_service.refreshToken();
      }, 15000);
    }
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

  convertDateToString(dateStr: string) {
    if (dateStr === null || dateStr === '' || dateStr === undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }

  convertDateToString2(dateStr: string) {
    if (dateStr === null || dateStr === '' || dateStr === undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return dateStr.substring(0, 10);
  }

  convertDateToStrView(dateStr: string) {
    if (dateStr === null || dateStr == undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

  convertDateTimeToStrView(dateStr: string) {
    if (dateStr === null || dateStr == undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }
}
