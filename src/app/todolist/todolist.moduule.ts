import { NgModule } from '@angular/core';
import { TodolistComponent } from './todolist.component';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'to-do-list', component: TodolistComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        TodolistComponent
    ]
})

export class TodolistModule {}