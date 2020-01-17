import { NgModule } from '@angular/core';
import { TodolistComponent, DialogOverviewExampleDialog } from './ToDoListIndex/todolist.component';
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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';

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
        MatNativeDateModule,
        MatExpansionModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatDialogModule
    ],
    declarations: [
        TodolistComponent,
        TodolistadminComponent,
        DialogOverviewExampleDialog
    ],
    entryComponents: [DialogOverviewExampleDialog]
})

export class TodolistModule {}