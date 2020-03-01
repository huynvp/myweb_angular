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
  public walletList :any;
  public keyWallet:any = null;
  public nameWallet:any = null; 
  public categoriesList:any;

  public nameAddWallet:string;

  public nameAddCategories:string;
  public typeAddCategories:string;

  public keyWalletChange:string;
  
  public nameChangeCategories:string;
  public typeChangeCategories:any = 0;
  public keyChangeCategories:any;

  constructor(private _location: Location, private moneyManage: MoneyManageService, private spinner: NgxSpinnerService, public dialog: MatDialog, public router: Router, public http: HttpClient) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    await this.loadData();
  }

  async loadData() {
    await this.loadWallet();
  }

  handleGoBack() {
    this._location.back();
  }

  async loadWallet() {
    this.spinner.show();
    await this.moneyManage.showListWallet()
    .then(data => {
      
      this.walletList = data['data'];
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    this.spinner.hide();
  }

  async handleLoadCategories(key: string, name:string) {
    this.spinner.show();
    this.keyWallet = key;
    this.nameWallet = name;
    await this.moneyManage.getListCategories(key)
    .then(data => {
      this.categoriesList = data['data'];
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
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
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `${res['message']}`,
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    await this.loadData();
    await this.handleLoadCategories(this.keyWallet, this.nameWallet);
    this.spinner.hide();
  }

  async handleAddWallet() {
    this.spinner.show();
    var data = {
      name: this.nameAddWallet
    };
    await this.moneyManage.addWallet(data)
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `${res['message']}`,
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    await this.loadData();
    await this.handleLoadCategories(this.keyWallet, this.nameWallet);
    this.spinner.hide();
  }

  async hanleDeleteWallet(key:string) {
    this.spinner.show();
    await this.moneyManage.deleteWallet(key)
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `${res['message']}`,
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    await this.loadData();
    this.spinner.hide();
  }

  async handleEditWallet() {
    this.spinner.show();
    var data = {
      name: this.nameWallet,
    };
    await this.moneyManage.editWallet(this.keyWallet, data)
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `${res['message']}`,
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    await this.loadData();
    await this.handleLoadCategories(this.keyWallet, this.nameWallet);
    this.spinner.hide();
  }

  async loadDetailCategories(key:string) {
    this.spinner.show();
    await this.moneyManage.getDetailCategories(key)
    .then((data) => {
      console.log(data);
      this.nameChangeCategories = data['data']['name'];
      this.typeChangeCategories = data['data']['type'];
      this.keyWalletChange = data['data']['wallet']['key'];
      this.keyChangeCategories = key;
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    this.spinner.hide();
  }

  async handleChangeWallet() {
    this.spinner.show();
    var data = {
      name: this.nameChangeCategories,
      type: this.typeChangeCategories,
      wallet: this.keyWalletChange
    };
    await this.moneyManage.editCategories(this.keyChangeCategories, data)
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `${res['message']}`,
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    await this.loadData();
    await this.handleLoadCategories(this.keyWallet, this.nameWallet);
    await this.loadDetailCategories(this.keyChangeCategories)
    this.spinner.hide();
  }
}
