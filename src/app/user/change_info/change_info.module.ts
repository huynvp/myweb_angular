import { NgModule } from '@angular/core';
import { ChangeInfoComponent } from './change_info.component';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzDatePickerModule, NzButtonModule, NzModalModule, NzFormModule, NzSelectModule, NzPopconfirmModule, NzIconModule, NzDividerModule, NzCardModule } from 'ng-zorro-antd';

const routes: Routes = [
    { 
        path: '',
        component: ChangeInfoComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        NzDatePickerModule,
        NzButtonModule,
        NzModalModule,
        NzFormModule,
        NzSelectModule,
        NzPopconfirmModule,
        NzIconModule,
        NzDividerModule,
        NzCardModule
    ],
    declarations: [
        ChangeInfoComponent,
    ]
})

export class ChangeInfoModule {}