import { Component, OnInit, Inject } from '@angular/core';
import { ToDoListService } from './todolist.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NzI18nService, en_US } from 'ng-zorro-antd';
import { BaseComponent } from 'src/shread/base.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;

export interface PopupData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [
    ToDoListService
  ]
})
export class TodolistComponent extends BaseComponent implements OnInit {
  showModalAdd = false;
  showModalEdit = false;
  loading = false;

  datas = [];
  public Editor = ClassicEditor;
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

  title: string;
  content: string = '';
  priority: any;
  dateRange:any;

  idEdit: any;
  titleEdit: string;
  contentEdit: string;
  dateRangeEdit:any;
  priorityEdit: any;
  processEdit: any = 0;
  finishEdit: any;

  constructor(
    private i18n: NzI18nService, 
    private todolist: ToDoListService, 
    private spinner: NgxSpinnerService, 
    public dialog: MatDialog, 
    public router: Router, 
    public http: HttpClient
    ) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.i18n.setLocale(en_US);
    this.dateFilterFrom = null;
    this.dateFilterTo = null;
    this.showAll();
  }

  showContent(title, content) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { title: title, content: content }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
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

  async hanleChangeDateInput(event) {
    if(event[0] != undefined && event[1] != undefined) {
      this.spinner.show();
      this.dateFilterFrom = event[0];
      this.dateFilterTo = event[1];
      await this.showAll();
      this.spinner.hide();
    }
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
      return '';
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

  // modal add

  handleClickAdd() {
    this.addNewData();
    this.showModalAdd = false;
  }

  handelShowModalAdd() {
    this.showModalAdd = true;
  }

  handleCancelModalAdd() {
    this.showModalAdd = false;
  }

  //modal edit
  handleClickEdit() {
    this.handleEdit();
    this.showModalEdit = false;
  }

  handelShowModalEdit() {
    this.showModalEdit = true;
  }

  handleCancelModalEdit() {
    this.showModalEdit = false;
  }

  async addNewData() {
    // this.spinner.show();
    var date = this.dateRange;
    if(date[0] == undefined) {
      date[0] = new Date();
    }
    if(date[1] == undefined) {
      date[1] = new Date();
    }
    var data = JSON.stringify({
      Title: this.title,
      Content: this.content,
      DateStart: this.convertDateToString(date[0]),
      DateEnd: this.convertDateToString(date[1]),
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
    this.showModalEdit = true;
    await this.todolist.getDetail(id)
      .then(res => {
        var data = res['data'];
        this.idEdit = data['id'];
        this.titleEdit = data['title'];
        this.contentEdit = data['content'];
        this.dateRangeEdit = [new Date(data['dateStart']), new Date(data['dateEnd'])]
        this.priorityEdit = data['priority'];
        this.processEdit = data['percent'];
        this.finishEdit = data['finish'];
        // console.log(this.priorityEdit)
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
    var dateRange = this.dateRangeEdit;
    if(dateRange[0] == undefined || dateRange[1] == undefined) {
      alert('Nhập đầy đủ ngày bắt đầu và kết thúc');
      return;
    }
    var req = JSON.stringify({
      Title: this.titleEdit,
      Content: this.contentEdit,
      DateStart: this.convertDateToString(dateRange[0]),
      DateEnd: this.convertDateToString(dateRange[1]),
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

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'todolistpopup.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PopupData) { }

  ngOnInit() {
    console.log(this);
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
