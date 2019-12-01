import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DataTablesModule } from 'angular-datatables';
import { LogDebugComponent } from './logDebug.component';
import { LogDetailComponent } from './logDetail/logDetail.component';


const routes: Routes = [
    {
        path: '',
        component: LogDebugComponent
    },
    {
        path: 'detail/:id',
        component: LogDetailComponent
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
    ],
    declarations: [
        LogDebugComponent,
        LogDetailComponent
    ]
})

export class LogDebugUserAdminModule {}
