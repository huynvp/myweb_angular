import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserAdminComponent } from './UserAdmin/useradmin.component';
import { PermissionUserAdminComponent } from './UserAdmin/Permission/permissionuseradmin';
import {LogUserAdminComponent} from './UserAdmin/Log/loguseradmin';

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
    ],
    declarations: [
        UserAdminComponent,
        PermissionUserAdminComponent,
        LogUserAdminComponent,
    ]
})

export class AdminModule {}
