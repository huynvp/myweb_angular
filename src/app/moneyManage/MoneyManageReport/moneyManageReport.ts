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
  data: any;
  detail:any;
  showModal: boolean = false;
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
      this.data = data['data'];
    })
  }

  formatMoney(data, type) {
    var money = Number(data).toLocaleString('en-GB');
    if(type === 0) {
      return `-${money} VND`;
    }else {
      return `${money} VND`;
    }
  }

  showDetail(detail) {
    this.detail = detail;
    this.showModal = true;
  }

  handleCancel() {
    this.showModal = false;
  }

  handleOk() {
    this.showModal = false;    
  }

  /* check report */
  tongChi(detail) {
    let tongChi = 0;
    detail.forEach(e => {
      if(e['categories']['type'] == 0) {
        tongChi += (e['money']*1);
      }
    })
    return tongChi;
  }

  tongThu(detail) {
    let tongThu = 0;
    detail.forEach(e => {
      if(e['categories']['type'] == 1) {
        tongThu += (e['money']*1);
      }
    })
    return tongThu;
  }

  tongDu(detail) {
    let tongThu = 0;
    let tongChi = 0;
    detail.forEach(e => {
      if(e['categories']['type'] == 0) {
        tongChi += (e['money']*1);
      }
      if(e['categories']['type'] == 1) {
        tongThu += (e['money']*1);
      }
    })
    return tongThu -  tongChi;
  }
}
