import { NgModule } from '@angular/core';
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
import { MoneyManageIndexComponent } from './MoneyManageIndex/moneyManageIndex';
import {MatSelectModule} from '@angular/material/select';
import { MoneyManageWalletComponent } from './MoneyManageWallet/moneyManageWallet';

import { NgZorroAntdModule, NZ_I18N, en_US, NzDatePickerModule, NzButtonModule, NzModalModule, NzFormModule, NzSelectModule, NzPopconfirmModule } from 'ng-zorro-antd';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    { 
        path: '', 
        component: MoneyManageIndexComponent 
    },
    {
        path: 'wallet',
        component: MoneyManageWalletComponent
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CKEditorModule,
        FormsModule,
        MatDatepickerModule,
        MatSelectModule,
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
        MatDialogModule,
        // BrowserAnimationsModule,
        NgZorroAntdModule,
        NzDatePickerModule,
        NzButtonModule,
        NzModalModule,
        NzFormModule,
        FormsModule,
        NzSelectModule,
        NzPopconfirmModule
    ],
    declarations: [
        MoneyManageIndexComponent,
        MoneyManageWalletComponent
    ],
    entryComponents: [],
})

export class MoneyManageModule {}