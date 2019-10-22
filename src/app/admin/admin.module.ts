import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserAdminComponent } from './UserAdmin/useradmin.component';
import { PermissionUserAdminComponent } from './UserAdmin/Permission/permissionuseradmin';
import {LogUserAdminComponent} from './UserAdmin/Log/loguseradmin';
import { TaskWorkAdminComponent } from './UserAdmin/TaskWork/taskworkadmin';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DataTablesModule } from 'angular-datatables';


const routes: Routes = [
    {
        path: 'admin',
        component: UserAdminComponent
    },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CKEditorModule,
        FormsModule,
        AngularEditorModule,
        DataTablesModule,
        BrowserModule
    ],
    declarations: [
        UserAdminComponent,
        PermissionUserAdminComponent,
        LogUserAdminComponent,
        TaskWorkAdminComponent,
    ]
})

export class AdminModule {}
