import { NgModule } from '@angular/core';
import { ChangeInfoComponent } from './change_info/change_info.component';
import { ChangePassComponent } from './change_pass/change_pass.component';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: 'change-info', component: ChangeInfoComponent },
    { path: 'change-pass', component: ChangePassComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ChangeInfoComponent,
        ChangePassComponent
    ]
})

export class UserModule {}