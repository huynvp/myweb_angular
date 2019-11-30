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

declare var $: any;

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
  checkStatus = 0;
  txtAddName: string;
  loadTable: boolean = true;

  constructor(public router: Router, public http: HttpClient, private user: UserAdminService, private spinner: NgxSpinnerService) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.DrawDataTable();
  }

  DrawDataTable() {
    const that = this;
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
          if (that.loadTable) {
            $('#data_table_log').on('click', '.delete', function() {
              that.deleteProject($(this).data('id'));
            });
          }
          that.loadTable = false;
        },
        columns: [
          { data: 'key', name: 'key', 'title': 'ID' },
          { data: 'name', name: 'name', 'title': 'Name' },
          { data: 'status', name: 'status', 'title': 'Status' },
          { data: 'enable', name: 'enable', 'title': 'Enable' },
          { data: 'createdAt', name: 'created_at', 'title': 'Created At' },
          { title:'Select'}
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
          {
            'targets': 5,
            'render': function(data, m, row) {
              return `<div class="dropdown">
              <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item delete" data-id="${row.id}">Delete</span>
                <span class="dropdown-item">Another action</span>
                <span class="dropdown-item">Something else here</span>
              </div>
            </div>`;
            }
          }

        ]
      },
    );
  }

  resetData() {
    this.txtAddName = '';
  }

  changeStatus() {
    if(this.checkStatus == 0)
      this.checkStatus = 1;
      else this.checkStatus = 0;
    console.log(this.checkStatus);
  }

  async addProject() {
    this.spinner.show();
    const data = {
      Name: this.txtAddName,
      Status: this.checkStatus
    }
    await this.user.addNewProject(data)
    .then(data => {
      $.notify({
        message: data["message"],
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        message: err["error"]["message"],
      }, {
        type: 'danger',
      });
    });

    this.dataTable.ajax.reload(null, false);
    this.spinner.hide();
    this.resetData();
  }

  async deleteProject(key:string) {
    this.spinner.show();
    await this.user.deleteProject(key)
    .then(data => {
      $.notify({
        message: data["message"],
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        message: err["error"]["message"],
      }, {
        type: 'danger',
      });
    });

    this.dataTable.ajax.reload(null, false);
    this.spinner.hide();
  }
}
