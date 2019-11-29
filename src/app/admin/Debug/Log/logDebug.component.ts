import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../../UserAdmin/useradmin.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'log-debug-user-admin',
  templateUrl: './logDebug.html',
  styleUrls: ['./logDebug.component.css'],
  providers: [
    UserAdminService
  ]
})
export class LogDebugComponent extends BaseComponent implements OnInit {
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
          url: environment.baseUrl + '/projectLogs',
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
          { data: 'key', name: 'key', 'title': 'ID' },
          { data: 'name', name: 'name', 'title': 'Name' },
          { data: 'status', name: 'status', 'title': 'Status' },
          { data: 'enable', name: 'enable', 'title': 'Enable' },
          { data: 'createdAt', name: 'created_at', 'title': 'Created At' },
        ],
        columnDefs: [
          {
            'targets': 2,
            'render': function (data) {
              if(data == 1)
                return `<button class="btn btn-sm btn-success">Active</button>`;
              else 
                return `<button class="btn btn-sm btn-danger">Deactive</button>`;
            }
          },
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
