import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../useradmin.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';

@Component({
  selector: 'log-user-admin',
  templateUrl: './loguseradmin.html',
  styleUrls: ['./loguseradmin.component.css'],
  providers: [
    UserAdminService
  ]
})
export class LogUserAdminComponent extends BaseComponent implements OnInit {
  logs: any;
  countData: number;
  countPage: number;
  countPageArr: any;
  currentPage: number = 1;
  numberOfPage: number = 10;

  constructor(public router: Router, public http: HttpClient, private user: UserAdminService, private spinner: NgxSpinnerService) {
    super(router, http);
  }

  async loadData() {
    this.spinner.show();
    await this.user.getLogUser(this.numberOfPage, this.currentPage)
        .then(data => {
          this.logs = data['data']['data'];
          this.countData = data['data']['countData'];
          this.countPage = data['data']['countPage'];
          this.currentPage = data['data']['currentPage'];
          this.numberOfPage = data['data']['numberOfPage'];
          this.countPageArr = Array(this.countPage).fill(0);
        })
        .catch(err => console.log(err));
    this.spinner.hide();
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.loadData();
  }

  changePage(currentPage:number) {
    this.currentPage = currentPage;
    this.loadData();
  }
}
