import { Component, OnInit } from '@angular/core';
import { ToDoListAdminService } from './todolistadmin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

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
  public title:string;
  public content:string;
  public date:string;
  public level:number;
  public order:number;

  public datas = [];
  public level_list = [];

  constructor(private todolist:ToDoListAdminService, private router:Router) { 
    this.title = '';
    this.content = '';
    this.date = '';
    this.level = 0;
    this.order = 0;
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
        this.datas = res['data'];
      })
      .catch(err => console.log(err));
    })
    .catch(err => {

    });    
  }

  handleEditWork(id) {
    alert(id);
  }

  handleDeleteWork(id) {
    alert(id);
  }

}
