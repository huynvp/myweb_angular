import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent } from '../../shread/base.component';
@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {
  username: string;
  url: string = "";
  admin: string = "";
  permission: string;
  constructor(public router: Router, public http: HttpClient, private spinner: NgxSpinnerService) {
    super(router, http);
    this.url = ``;
  }
  async ngOnInit() {
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
        console.log(err);
        Swal.fire('Eror', 'Token invalid', 'error');
        this.router.navigate(['/login']);
      });
    this.spinner.hide();
  }
  handleLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    Swal.fire('Success', 'See you again', 'info');
    this.router.navigate(['/login']);
  }
}
