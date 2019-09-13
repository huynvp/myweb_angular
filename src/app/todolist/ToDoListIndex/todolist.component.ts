import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './todolist.service';

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

  constructor(private todolist:ToDoListService) { 

  }

  ngOnInit() {
    this.todolist.getAll()
    .then(res => {
      this.datas = res['data'];
    })
    .catch(err => console.log(err));
  }

}
