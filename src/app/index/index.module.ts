import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DataTablesModule } from 'angular-datatables';
import { IndexComponent } from "./index.component";
import { NzModalModule, NzListModule, NzSkeletonModule } from 'ng-zorro-antd';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        NzModalModule,
        NzListModule,
        NzSkeletonModule
    ],
    declarations: [
        IndexComponent
    ]
})

export class IndexModule {}
