import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { ChangePassComponent } from './change_pass.component';

const routes: Routes = [
    { 
        path: '',
        component: ChangePassComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ChangePassComponent,
    ]
})

export class ChangePassModule {}