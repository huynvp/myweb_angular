import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './todolist.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [
    ToDoListService
  ]
})
export class TodolistComponent implements OnInit {
  datas = [];
  dateChange = null;
  dateStrView = null;
  panelOpenState = false;
  priorityArr = [
    {
      value: 'Thấp',
      key: 1
    },
    {
      value: 'Trung bình',
      key: 2
    },
    {
      value: 'Cao',
      key: 3
    }
  ];

  dateFilterFrom: any;
  dateFilterTo: any;

  content: string;
  dateFrom: string;
  dateTo: string;
  priority: any;

  idEdit: any;
  contentEdit: string;
  dateFromEdit: any;
  dateToEdit: any;
  priorityEdit: any;
  processEdit:any = 0;
  finishEdit: any;

  constructor(private todolist: ToDoListService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.dateFilterFrom = new Date();
    this.dateFilterTo = new Date();
    this.showAll();
  }

  async showAll() {
    this.spinner.show();
    const dateFrom = this.convertDateToString(this.dateFilterFrom);
    const dateTo = this.convertDateToString(this.dateFilterTo);
    await this.todolist.getAll(dateFrom, dateTo)
      .then(res => {
        this.datas = res['data'];
      })
      .catch(err => console.log(err));
    this.spinner.hide();
  }

  async hanleChangeDateInput() {
    this.spinner.show();
    await this.showAll();
    this.spinner.hide();
  }

  async hanleChangeCheckFinish(id, checked) {
    this.spinner.show();
    let data = {
      finish: !checked
    };
    await this.todolist.updateData(id, data)
      .then(res => {
        $.notify({
          icon: 'glyphicon glyphicon-remove',
          message: `${res['message']}`,
        }, {
          type: 'success',
        });
      })
      .catch(err => {
        $.notify({
          icon: 'glyphicon glyphicon-remove',
          message: `Error: ${err.error.message}`,
        }, {
          type: 'danger',
        });
      });
    this.showAll();
    this.spinner.hide();
  }

  convertDateToString(dateStr: string) {
    if (dateStr === null) {
      var date = new Date();
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  }

  convertDateToStrView(dateStr: string) {
    if (dateStr === null) {
      var date = new Date();
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

  handleKeyPressAddTask() {
    this.addNewData();
  }

  handleClickAdd() {
    this.addNewData();
  }

  async addNewData() {
    this.spinner.show();
    var data = JSON.stringify({
      Content: this.content,
      DateStart: this.convertDateToString(this.dateFrom),
      DateEnd: this.convertDateToString(this.dateTo),
      Priority: this.priority
    });
    await this.todolist.addNewData(data)
      .then(res => {
        $.notify({
          icon: 'glyphicon glyphicon-remove',
          message: `${res['message']}`,
        }, {
          type: 'success',
        });
      })
      .catch(err => {
        $.notify({
          icon: 'glyphicon glyphicon-remove',
          message: `Error: ${err.error.message}`,
        }, {
          type: 'danger',
        });
      });
      this.showAll();
    this.spinner.hide();
  }

  async handleDeleteNote(id) {
    if (confirm("Do you want delete this note?")) {
      this.spinner.show();
      await this.todolist.deleteData(id)
        .then(res => {
          $.notify({
            icon: 'glyphicon glyphicon-remove',
            message: `${res['message']}`,
          }, {
            type: 'success',
          });
        })
        .catch(err => {
          $.notify({
            icon: 'glyphicon glyphicon-remove',
            message: `Error: ${err.error.message}`,
          }, {
            type: 'danger',
          });
        });
        this.showAll();
      this.spinner.hide();
    }
  }

  async hanleLoadDetail(id) {
    this.spinner.show();
    await this.todolist.getDetail(id)
    .then(res => {
      var data = res['data'];
      this.idEdit = data['id'];
      this.contentEdit = data['content'];
      this.dateFromEdit = new Date(data['dateStart']);
      this.dateToEdit = new Date(data['dateEnd']);
      this.priorityEdit = data['priority'];
      this.processEdit = data['percent'];
      this.finishEdit = data['finish'];
      console.log(this)
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    })
    this.spinner.hide();
  }

  async handleEdit() {
    this.spinner.show();
    var req = JSON.stringify({
      Content: this.contentEdit,
      DateStart: this.convertDateToString(this.dateFromEdit),
      DateEnd: this.convertDateToString(this.dateToEdit),
      Priority: this.priorityEdit,
      Percent: this.processEdit
    });
    await this.todolist.updateData(this.idEdit, req)
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `${res['message']}`,
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    })
    this.showAll();
    this.spinner.hide();
  }
}

