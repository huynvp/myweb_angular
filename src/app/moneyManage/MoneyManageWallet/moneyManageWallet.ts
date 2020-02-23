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
  selector: 'app-moneyManageWallet',
  templateUrl: './moneyManageWallet.component.html',
  styleUrls: ['./moneyManageWallet.component.css'],
  providers: [
    MoneyManageService
  ]
})
export class MoneyManageWalletComponent extends BaseComponent implements OnInit {
  private walletList :any;
  private keyWallet:any = null;
  private categoriesList:any;

  private nameAddCategories:string;
  private typeAddCategories:string;

  constructor(private _location: Location, private moneyManage: MoneyManageService, private spinner: NgxSpinnerService, public dialog: MatDialog, public router: Router, public http: HttpClient) {
    super(router, http);
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.spinner.show();
    await this.loadWallet();
    this.spinner.hide();
  }

  handleGoBack() {
    this._location.back();
  }

  async loadWallet() {
    await this.moneyManage.showListWallet()
    .then(data => {
      this.walletList = data['data'];
    })
    .catch(err => {
      console.log(err);
    })
  }

  async handleLoadCategories(key: string) {
    this.spinner.show();
    this.keyWallet = key;
    await this.moneyManage.getListCategories(key)
    .then(data => {
      this.categoriesList = data['data'];
    })
    .catch(err => {
      console.log(err);
    })
    this.spinner.hide();
  }

  async handleAddCategories() {
    this.spinner.show();
    var data = {
      name: this.nameAddCategories,
      type: this.typeAddCategories,
	    wallet: this.keyWallet
    };
    await this.moneyManage.addCategories(data)
    .then((data) => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
    await this.loadData();
    await this.handleLoadCategories(this.keyWallet);
    this.spinner.hide();
  }
}
