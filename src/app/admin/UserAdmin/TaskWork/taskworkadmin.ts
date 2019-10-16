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

  constructor(public router: Router, public http: HttpClient, private user: UserAdminService, private spinner: NgxSpinnerService) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.spinner.show();
    await this.user.showListTask()
      .then(data => {
        console.log(data);
        this.listTasks = data["data"];
      });
    this.spinner.hide();
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
        console.log(data);
      })
      .catch(err => console.log(err));
    await this.ngOnInit();
    this.spinner.hide();
  }

  async changeStatusTask(key: number, status: number) {
    this.spinner.show();
    await this.user.showDetailTask(key)
      .then(data => {
        var data = data["data"];
        this.user.changeStatusTask(data["key"], status)
          .then(data => {
            console.log(data);
            this.ngOnInit();
            this.spinner.hide();
          })
          .catch(err => {
            console.log(err);
            this.spinner.hide();
          });
      })
      .catch(err => {
        console.log(err);
      })
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
        console.log(data);
      })
      .catch(err => console.log(err));
    await this.ngOnInit();
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
            this.ngOnInit();
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