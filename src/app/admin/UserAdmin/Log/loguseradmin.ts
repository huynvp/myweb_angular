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
  dataTable: any;

  constructor(public router: Router, public http: HttpClient) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.DrawDataTable();
  }

  DrawDataTable() {
    this.dataTable = $('#data_table_log').DataTable(
      {
        processing: true,
        serverSide: true,
        searching: true,
        paging: true,
        order: [],
        ajax: {
          url: environment.baseUrl + '/user/logs',
          headers: {
            'Authorization': `Bearer ${localStorage.access_token}`
          },
        },
        'drawCallback': function () {
          $('#data_table_log').addClass("table");
          $('#data_table_log').addClass("table-bordered");
          $('#data_table_log').addClass("table-hover");
          $('#data_table_log').addClass("table-striped");
          $('#data_table_log').children('thead').addClass('bg-info text-white');
        },
        columns: [
          { data: 'id', name: 'id', 'title': 'ID' },
          { data: 'email', name: 'email', 'title': 'User' },
          // { data: 'function', name: 'function', 'title': 'Content' },
          { data: 'path', name: 'path', 'title': 'Path' },
          { data: 'method', name: 'method', 'title': 'Method' },
          { data: 'createdAt', name: 'created_at', 'title': 'Created At' },
        ],
        columnDefs: [
          {
            'targets': 4,
            'render': function (data) {
                return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
        },

        ]
      },
    );
  }
}
