import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../useradmin.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as $ from 'jquery';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'message-log-admin',
  templateUrl: './messagelog.html',
  styleUrls: ['./messagelog.component.css'],
  providers: [
    UserAdminService
  ]
})
export class MessageLogComponent extends BaseComponent implements OnInit {
  listTasks: any;
  txtTitleMess: string;
  txtContentMess: string;
  key: number;
  dataTable: any;
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
    this.dataTable = $('#data_table_message').DataTable(
      {
        processing: true,
        serverSide: true,
        searching: true,
        paging: true,
        order: [],
        ajax: {
          url: environment.baseUrl + '/admin/messageLogs',
          headers: {
            'Authorization': `Bearer ${localStorage.access_token}`
          },
        },
        'drawCallback': function () {
          $('#data_table_message').addClass("table");
          $('#data_table_message').addClass("table-bordered");
          $('#data_table_message').addClass("table-hover");
          $('#data_table_message').addClass("table-striped");
          $('#data_table_message').children('thead').addClass('bg-info text-white');
          if (that.loadTable) {
            $('#data_table_message').on('click', '.btn_edit', function () {
              that.handleShowDetailTaskWork($(this).data('id'));
            })
            $('#data_table_message').on('click', '.btn_delete', function () {
              that.handleDeleteTaskWork($(this).data('id'));
            })

          }
          that.loadTable = false;
        },
        columns: [
          { data: 'key', name: 'key', 'title': 'ID' },
          { data: 'title', name: 'title', 'title': 'Title' },
          { data: 'content', name: 'content', 'title': 'Content' },
          { data: 'status', name: 'status', 'title': 'Status' },
          { data: 'created_at', name: 'created_at', 'title': 'Created At' },
          { data: 'updated_at', name: 'updated_at', 'title': 'Updated At' },
          { data: '', name: '', 'title': 'Action' },
        ],
        columnDefs: [
          {
            'targets': 3,
            'render': function (data, type, row) {
              if (data == 1)
                return '<button class="btn btn-sm btn-success">Active</button>';
              else
                return '<button class="btn btn-sm btn-dark">Deactive</button>';
            }
          },
          {
            'targets': [4, 5],
            'render': function (data) {
              return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
          },
          {
            'targets': 6,
            'render': function (data, type, row) {
              return '<button class="btn btn-sm btn-warning btn_edit" data-id="' + row.key + '" data-toggle="modal" data-target="#modalEditWork">Edit task</button>' +
                '<button class="btn btn-sm btn-danger btn_delete" data-id="' + row.key + '">Delete task</button>';
            }
          },
        ]
      },
    );
  }


  resetData() {
    this.txtTitleMess = "";
    this.txtContentMess = "";
  }

  async handleAddMess() {
    this.spinner.show();
    await this.user.addNewMess(this.txtTitleMess, this.txtContentMess)
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

  async handleEditMess() {
    this.spinner.show();
    this.user.showDetailMess(this.key)
      .then(data => {
        var data = data["data"];
        this.key = data["key"];

        this.user.editMess(this.key, this.txtTitleMess, this.txtContentMess, data["timestamp"])
          .then(data => {
            $.notify({
              message: data["message"],
            }, {
              type: 'success',
            });
            this.dataTable.ajax.reload(null, false);
          })
          .catch(err => {
            $.notify({
              // icon: 'glyphicon glyphicon-remove',
              message: err["error"]["message"],
            }, {
              type: 'danger',
            });
          });
      })
      .catch(err => {
        $.notify({
          // icon: 'glyphicon glyphicon-remove',
          message: err["error"]["message"],
        }, {
          type: 'danger',
        });
      })
    this.dataTable.clear();
    this.dataTable.ajax.reload(null, false);
    this.spinner.hide();
  }

  handleShowDetailTaskWork(id: number) {
    this.user.showDetailMess(id)
      .then(data => {
        var data = data["data"];
        this.key = data["key"];
        this.txtTitleMess = data["title"];
        this.txtContentMess = data["content"];
      })
      .catch(err => {
        $.notify({
          // icon: 'glyphicon glyphicon-remove',
          message: err["error"]["message"],
        }, {
          type: 'danger',
        });
      })
  }

  async handleDeleteTaskWork(id: number) {
    Swal.fire({
      title: 'Delete task',
      text: 'Do you want delete this task?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.spinner.show();
        this.user.deleteMess(id)
          .then(data => {
            this.dataTable.clear();
            this.dataTable.ajax.reload(null, false);
            $.notify({
              message: data["message"],
            }, {
              type: 'success',
            });
          })
          .catch(err => {
            $.notify({
              // icon: 'glyphicon glyphicon-remove',
              message: err["error"]["message"],
            }, {
              type: 'danger',
            });
          })
        this.spinner.hide();
      }
    })
  }
}