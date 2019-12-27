import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './todolist.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
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

  constructor(private todolist:ToDoListService) { 

  }

  ngOnInit() {
    this.todolist.getAll()
    .then(res => {
      this.datas = res['data'];
    })
    .catch(err => console.log(err));
  }

  hanleChangeDateInput(change, event) {
    console.log(change);
    var date = new Date(event.value);
    date.getDate();
    console.log(date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate());
  }
}
