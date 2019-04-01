import { Component, OnInit } from '@angular/core';
import { ToDoListAdminService } from './todolistadmin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  public datas = [];

  constructor(private  todolist:ToDoListAdminService) { 

  }

  ngOnInit() {
    this.todolist.getAll()
    .then(res => {
      this.datas = res['data'];
    })
    .catch(err => console.log(err));
  }

}
