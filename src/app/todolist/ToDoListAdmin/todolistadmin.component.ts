import { Component, OnInit } from '@angular/core';
import { ToDoListAdminService } from './todolistadmin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolistadmin.component.html',
  styleUrls: ['./todolistadmin.component.css'],
  providers: [
    ToDoListAdminService
  ]
})
export class TodolistadminComponent implements OnInit {
  public Editor = ClassicEditor;
  public Editor_edit = ClassicEditor;
  public title:string;
  public content:string;
  public date:string;
  public level:number;
  public order:number;

  public title_edit:string;
  public content_edit:string;
  public date_edit:string;
  public level_edit:number;
  public order_edit:number;
  public id_edit:number;

  public datas = [];
  public level_list = [];

  constructor(private todolist:ToDoListAdminService, private router:Router) { 
    this.title = '';
    this.content = '';
    this.date = '';
    this.level = 0;
    this.order = 0;

    this.title_edit = '';
    this.content_edit = '';
    this.date_edit = Date();
    this.level_edit = 0;
    this.order_edit = 0;
    this.id_edit = 0;
  }

  ngOnInit() {
    this.todolist.getAll()
    .then(res => {
      this.datas = res['data'];
    })
    .catch(err => console.log(err));

    this.todolist.getLevel()
    .then(res => {
      this.level_list = res['data'];
    })
    .catch(err => {
      console.log(err)
    });
  }

  handleAddWork() {
    this.todolist.addWork(this.title, this.content, this.date, this.level, this.order)
    .then(res => {
      this.todolist.getAll()
      .then(res => {
        Swal.fire('Success', 'Add note success', 'success');
        this.datas = res['data'];
      })
      .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleShowOneWork(id) {
    this.todolist.getOne(id)
    .then(res => {
      let data = res['data'][0];

      var date_pipe = new DatePipe('en-US');
      
      this.title_edit = data['title'];
      this.content_edit = data['content'];
      this.date_edit = date_pipe.transform(data['date'], 'yyyy-MM-dd');
      this.order_edit = data['orders'];
      this.level_edit = data['level_id'];
      this.id_edit = data['note_id'];
    })
    .catch(err => {
      console.log(err)
    });
  }

  handleEditWork() {
    this.todolist.editWork(this.id_edit, this.title_edit, this.content_edit, this.date_edit, this.level_edit, this.order_edit)
    .then(res => {
      this.todolist.getAll()
      .then(res => {
        Swal.fire('Success', 'Update note success', 'success');
        this.datas = res['data'];
      })
      .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleDeleteWork(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be delete this work?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.todolist.deleteWork(id)
        .then(res => {
          this.todolist.getAll()
          .then(res => {
            Swal.fire('Success', 'Update note success', 'success');
            this.datas = res['data'];
          })
          .catch(err => console.log(err));
            Swal.fire('Success', 'Delete success', 'success');
          })
        .catch(err => console.log(err));  
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
