import { NgModule } from '@angular/core';
import { TodolistComponent } from './ToDoListIndex/todolist.component';
import { TodolistadminComponent } from './ToDoListAdmin/todolistadmin.component';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const routes: Routes = [
    { path: 'to-do-list', component: TodolistComponent },
    { path: 'to-do-list/admin', component: TodolistadminComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CKEditorModule
    ],
    declarations: [
        TodolistComponent,
        TodolistadminComponent
    ]
})

export class TodolistModule {}