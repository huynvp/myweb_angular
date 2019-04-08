import { NgModule } from '@angular/core';
import { TodolistComponent } from './ToDoListIndex/todolist.component';
import { TodolistadminComponent } from './ToDoListAdmin/todolistadmin.component';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { 
        path: 'to-do-list', 
        component: TodolistComponent 
    },
    { 
        path: 'to-do-list/admin', 
        component: TodolistadminComponent 
    },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CKEditorModule,
        FormsModule,
    ],
    declarations: [
        TodolistComponent,
        TodolistadminComponent
    ]
})

export class TodolistModule {}