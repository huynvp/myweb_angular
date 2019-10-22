import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../useradmin.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';
import { environment } from 'src/environments/environment';

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
  dataTable: any;

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
    this.DrawDataTable();
  }

  DrawDataTable() {
    this.dataTable = $('#data_table_log').DataTable(
      {
        processing: true,
        serverSide: true,
        searching: true,
        paging: true,
        ajax: {
          url: environment.baseUrl + '/user/logs',
          headers: {
            'Authorization': `Bearer ${localStorage.access_token}`
          },
        },
        'drawCallback': function (settings) {
          $('#data_table_log').addClass("table");
          $('#data_table_log').addClass("table-bordered");
          $('#data_table_log').addClass("table-hover");
          $('#data_table_log').addClass("table-striped");
          $('#data_table_log').children('thead').addClass('bg-info');
        },
        columns: [
          { data: 'id', name: 'id', 'title': 'ID' },
          { data: 'userId', name: 'user', 'title': 'User' },
          { data: 'content', name: 'content', 'title': 'Content' },
          { data: 'createdAt', name: 'created_at', 'title': 'Created At' },
        ],
        columnDefs: [
          {
            'targets': 3,
            // 'className': 'details-control',
            'render': function (data, type, row) {
                return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
        },

        ]
      },
    );
  }

  changePage(currentPage: number) {
    this.currentPage = currentPage;
    this.loadData();
  }
}
