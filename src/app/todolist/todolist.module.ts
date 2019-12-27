import { NgModule } from '@angular/core';
import { TodolistComponent } from './ToDoListIndex/todolist.component';
import { TodolistadminComponent } from './ToDoListAdmin/todolistadmin.component';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule, MatDatepickerInput} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
    { 
        path: '', 
        component: TodolistComponent 
    },
    { 
        path: '/admin', 
        component: TodolistadminComponent 
    },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CKEditorModule,
        FormsModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        // MatDatepickerInput,
        MatRippleModule,
        MatInputModule,
        MatNativeDateModule
    ],
    declarations: [
        TodolistComponent,
        TodolistadminComponent
    ]
})

export class TodolistModule {}