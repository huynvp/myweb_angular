import { Component, OnInit, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoneyManageService } from '../moneyManageIndex.service';
import { BaseComponent } from 'src/shread/base.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-moneyManageReport',
  templateUrl: './moneyManageReport.component.html',
  styleUrls: ['./moneyManageReport.component.css'],
  providers: [
    MoneyManageService
  ]
})
export class MoneyManageReportComponent extends BaseComponent implements OnInit {
  constructor(private _location: Location, private moneyManage: MoneyManageService, private spinner: NgxSpinnerService, public dialog: MatDialog, public router: Router, public http: HttpClient) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.loadData();
  }

  handleGoBack() {
    this._location.back();
  }

  loadData() {
    this.moneyManage.walletReport()
    .then(data => {
      console.log(data)
    })
  }
}
