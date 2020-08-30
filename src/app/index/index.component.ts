import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent } from '../../shread/base.component';
import { AppService } from '../app.service';
@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {
  loading:any=false;
  showModal:any = false;
  corona: any = '';
  detailCorona: any='';
  username: string;
  url: string = "";
  admin: string = "";
  permission: string;
  events: any;
  eventName:any;
  eventDate:any = new Date();
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  time1: any;
  time2: any;
  dateNow: any = new Date();
  constructor(public router: Router, public http: HttpClient, private spinner: NgxSpinnerService, private app: AppService) {
    super(router, http);
    this.url = ``;
  }
  async ngOnInit() {
    this.app.getEvent()
    .then(data => {
      this.events = data['data'];
    })
    .catch(err => {
      console.log(err)
    })
    this.time1 = setInterval(() => {
      let dateNow: any = new Date();
      var distance = this.eventDate - dateNow;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / (1000));

      // console.log(this.seconds);
    }, 500);
    this.loading = true;
    this.loading = false;
    this.spinner.show();
    await super.ngOnInit();
    this.http.get(`${environment.baseUrl}/user/me`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.access_token
      })
    })
    .subscribe(res => {
      this.username = res['data']['name'];
      if (res['data']['permission'] == null) {
        localStorage.removeItem('access_token');
        Swal.fire('Error', 'Permission denied', 'error');
        this.router.navigate(['/login']);
      }
      this.permission = res['data']['permission']['name'];
      if (res['data']['avatar'] != null) {
        this.url = `${environment.publicUrl}/image/avatar/${res['data']['avatar']}`;
      }
      else {
        this.url = `${environment.publicUrl}/image/avatar/default-avatar.png`;
      }
    }, err => {
      localStorage.removeItem('access_token');
      // console.log(err);
      // Swal.fire('Eror', 'Token invalid', 'error');
      this.router.navigate(['/login']);
    });
    this.spinner.hide();
  }

  // async getCorona() {
  //   await this.app.callApiCorona()
  //   .then(data => {
  //     console.log(data)
  //     this.corona = data['data'];
  //   })
  // }

  handleCancel() {
    this.showModal = false;
  }

  handleOk() {
    this.showModal = false;
  }

  viewDetail(data) {
    console.log(data);
    this.detailCorona = data;
    this.showModal = true;
  }

  handleChangeEvent(id) {
    this.app.getDetailEvent(id)
    .then(data => {
      this.eventName = data['data']['name'];
      this.eventDate = new Date(data['data']['date']);
      // console.log(data);
    })
    .catch(err => {
      console.log(err)
    });
  }
  handleLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    // Swal.fire('Success', 'See you again', 'info');
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    clearInterval(this.time1);
    clearInterval(this.time2);
    super.ngOnDestroy();
  }
}
