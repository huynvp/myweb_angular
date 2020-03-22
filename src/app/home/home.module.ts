import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DataTablesModule } from 'angular-datatables';
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'user/change-info',
                loadChildren: '../user/change_info/change_info.module#ChangeInfoModule'
            },
            {
                path: 'user/change-pass',
                loadChildren: '../user/change_pass/change_pass.module#ChangePassModule'
            },
            {
                path: 'index',
                loadChildren: '../index/index.module#IndexModule'
            },
            {
                path: 'to-do-list',
                loadChildren: '../todolist/todolist.module#TodolistModule'
            },
            {
                path: 'moneyManage',
                loadChildren: '../moneyManage/moneyManage.module#MoneyManageModule'
            },
        ]
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CKEditorModule,
        FormsModule,
        AngularEditorModule,
        DataTablesModule,
        BrowserModule,
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule {}
