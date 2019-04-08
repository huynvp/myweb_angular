import { NgModule } from '@angular/core';
import { ApiDocComponent } from './api_doc/api_doc.component';
import { ApiDocDetailComponent } from './api_doc_detail/api_doc_detail.component';
import { ApiDocAdmiComponent } from './api_doc_admin/api_doc_admin.component';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const routes: Routes = [
    { 
        path: 'api-document',
        component: ApiDocComponent,
        pathMatch: 'full'
    },
    { 
        path: 'api-document/admin',
        component: ApiDocAdmiComponent,
        pathMatch: 'full'
    },
    { 
        path: 'api-document/detail/:id',
        component: ApiDocDetailComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        CKEditorModule
    ],
    declarations: [
        ApiDocComponent,
        ApiDocAdmiComponent,
        ApiDocDetailComponent
    ]
})

export class ApiDocModule {}