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

@Component({
  selector: 'task-work-admin',
  templateUrl: './taskworkadmin.html',
  styleUrls: ['./taskworkadmin.component.css'],
  providers: [
    UserAdminService
  ]
})
export class TaskWorkAdminComponent extends BaseComponent implements OnInit {
  listTasks: any;
  txtContentTask: string;
  txtTitleTask: string;
  txtDateTask: string;
  txtStatusTaskWork: number;
  txtTypeTaskWork: number;
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
    this.dataTable = $('#data_table_task').DataTable(
      {
        processing: true,
        serverSide: true,
        searching: true,
        paging: true,
        order: [],
        ajax: {
          url: environment.baseUrl + '/taskWorks',
          headers: {
            'Authorization': `Bearer ${localStorage.access_token}`
          },
        },
        'drawCallback': function () {
          $('#data_table_task').addClass("table");
          $('#data_table_task').addClass("table-bordered");
          $('#data_table_task').addClass("table-hover");
          $('#data_table_task').addClass("table-striped");
          $('#data_table_task').children('thead').addClass('bg-info text-white');
          if (that.loadTable) {
            $('#data_table_task').on('click', '.btn-active', function () {
              that.changeStatusTask($(this).data('id'), -1);
            })
            $('#data_table_task').on('click', '.btn-inactive', function () {
              that.changeStatusTask($(this).data('id'), 0);
            })
            $('#data_table_task').on('click', '.btn_detail', function () {
              that.handleShowDetailTaskWork($(this).data('id'));
            })
            $('#data_table_task').on('click', '.btn_edit', function () {
              that.handleShowDetailTaskWork($(this).data('id'));
            })
            $('#data_table_task').on('click', '.btn_delete', function () {
              that.handleDeleteTaskWork($(this).data('id'));
            })

          }
          that.loadTable = false;
        },
        columns: [
          { data: 'key', name: 'key', 'title': 'ID' },
          { data: 'title', name: 'title', 'title': 'Title' },
          { data: 'dateOfTask', name: 'dateOfTask', 'title': 'Date' },
          { data: 'status', name: 'status', 'title': 'Status' },
          { data: 'type', name: 'type', 'title': 'Type' },
          { data: 'created_at', name: 'created_at', 'title': 'Created At' },
          { data: 'updated_at', name: 'updated_at', 'title': 'Updated At' },
          { data: '', name: '', 'title': 'Action' },
        ],
        columnDefs: [
          {
            'targets': 2,
            'render': function (data) {
              return new Date(data).toLocaleDateString('en-GB');
            }
          },
          {
            'targets': 3,
            'render': function (data, type, row) {
              if (data == 0)
                return '<button class="btn btn-sm btn-success btn-active" data-id="' + row.key + '">Active</button>';
              else
                return '<button class="btn btn-sm btn-dark btn-inactive" data-id="' + row.key + '">Deactive</button>';
            }
          },
          {
            'targets': 4,
            'render': function (data, type, row) {
              if (data == 1)
                return '<button class="btn btn-sm btn-success">Success</button>';
              else if (data == 0)
                return '<button class="btn btn-sm btn-warning">Warning</button>';
              else
                return '<button class="btn btn-sm btn-danger">Dangerous</button>';
            }
          },
          {
            'targets': [5, 6],
            'render': function (data) {
              return new Date(data).toLocaleDateString('en-GB') + " " + new Date(data).toLocaleTimeString('en-GB');
            }
          },
          {
            'targets': 7,
            'render': function (data, type, row) {
              return '<button class="btn btn-sm btn-warning btn_edit" data-id="' + row.key + '" data-toggle="modal" data-target="#modalEditWork">Edit task</button>' +
                '<button class="btn btn-sm btn-info btn_detail" data-id="' + row.key + '" data-toggle="modal" data-target="#modalDetailTaskWork">Detail</button>' +
                '<button class="btn btn-sm btn-danger btn_delete" data-id="' + row.key + '">Delete task</button>';
            }
          },
        ]
      },
    );
  }


  resetData() {
    this.txtContentTask = "";
    this.txtTitleTask = "";
    this.txtDateTask = "";
    this.txtStatusTaskWork = 0;
    this.txtTypeTaskWork = 0;
  }

  async handleAddTaskWork() {
    this.spinner.show();
    await this.user.addNewTask(
      this.txtTitleTask,
      this.txtContentTask,
      this.txtDateTask,
      this.txtStatusTaskWork,
      this.txtTypeTaskWork)
      .then(data => {
        Swal.fire('Success', "Add new task success", 'success');
        console.log(data);
      })
      .catch(err => {
        console.log(err)
        Swal.fire('Error', err.error.message, 'error');
      });
    this.dataTable.ajax.reload(null, false);
    this.spinner.hide();
  }

  async changeStatusTask(key: number, status: number) {
    this.spinner.show();
    await this.user.showDetailTask(key)
      .then(async data => {
        var data = data["data"];
        await this.user.changeStatusTask(data["key"], status)
          .then(data => {
            this.dataTable.clear();
            this.dataTable.ajax.reload(null, false);
            console.log(data);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      })

    this.spinner.hide();
  }

  async handleEditTask() {
    this.spinner.show();
    await this.user.editTask(
      this.key,
      this.txtTitleTask,
      this.txtContentTask,
      this.txtDateTask,
      this.txtStatusTaskWork,
      this.txtTypeTaskWork)
      .then(data => {
        Swal.fire('Success', 'Change success', 'success');
        console.log(data);
      })
      .catch(err => console.log(err));
    this.dataTable.clear();
    this.dataTable.ajax.reload(null, false);
    this.spinner.hide();
  }

  handleShowDetailTaskWork(id: number) {
    this.user.showDetailTask(id)
      .then(data => {
        var datePipe = new DatePipe('en-US');
        var data = data["data"];
        this.key = data["key"];
        this.txtTitleTask = data["title"];
        this.txtDateTask = datePipe.transform(data["dateOfTask"], 'yyyy-MM-dd');
        this.txtContentTask = data["content"];
        this.txtStatusTaskWork = data["status"];
        this.txtTypeTaskWork = data["type"];
      })
      .catch(err => {
        console.log(err);
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
        this.user.deleteTask(id)
          .then(data => {
            this.dataTable.clear();
            this.dataTable.ajax.reload(null, false);
            Swal.fire('Deleted!', data["message"], 'success');
          })
          .catch(err => {
            console.log(err);
            Swal.fire('Deleted!', 'Delete error, please check again', 'error');
          })
        this.spinner.hide();
      }
    })
  }
}