import { Component, OnInit, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoneyManageService } from '../moneyManageIndex.service';
import { BaseComponent } from 'src/shread/base.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
declare var $: any;

export interface PopupData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-moneyManageIndex',
  templateUrl: './moneyManageIndex.component.html',
  styleUrls: ['./moneyManageIndex.component.css'],
  providers: [
    MoneyManageService
  ]
})
export class MoneyManageIndexComponent extends BaseComponent implements OnInit {
  categorieArr = [
    {
      'key': 0,
      'value': 'Chi',
    },
    {
      'key': 1,
      'value': 'Thu',
    }
  ];
  categories: any;
  data:any;
  listWallets:any;

  titleCategory:any;
  typeCategory: any;

  content:any;
  money:any;
  date:any;
  category:any;

  dateFilterFrom: any;
  dateFilterTo:any;
  typeFilter: any = -1;

  tongThu: number = 0;
  tongChi: number = 0;

  walletOrigin: any;
  walletChange: any;
  moneyChangeWallet: any;
  noteChangeWallet: any;

  convertDateToString(dateStr: string) {
    if (dateStr === null || dateStr === '' || dateStr === undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  }

  convertDateToStrView(dateStr: string) {
    if (dateStr === null || dateStr == undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

  constructor(private apollo: Apollo, private moneyManage: MoneyManageService, private spinner: NgxSpinnerService, public dialog: MatDialog, public router: Router, public http: HttpClient) {
    super(router, http);
  }

  async ngOnInit() {
    await this.loadData();
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //     query {
    //       moneyManage {
    //         money
    //       }
    //     }
    //   `
    //   })
    //   .valueChanges.subscribe(result => {
    //     console.log(result);
    //   });
  }

  async loadData() {
    this.spinner.show();
    await this.showCategories();
    await this.showTable();
    await this.getWallet();
    this.spinner.hide();
  }

  async getWallet() {
    await this.moneyManage.showListWallet()
    .then(data => {
      this.listWallets = data['data'];
      console.log(this.listWallets)
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    })
  }

  async showCategories() {
    await this.moneyManage.getListCategories()
    .then(data => {
      this.categories = data['data'];
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    })
  }

  async showTable() {
    this.tongChi = this.tongThu = 0;
    await this.moneyManage.getListMoneyManage(this.convertDateToString(this.dateFilterFrom), this.convertDateToString(this.dateFilterTo), this.typeFilter)
    .then(data => {
      this.data = data['data'];
      this.data.forEach(element => {
        if(element['categories']['type'] === 0) {
          this.tongChi += Number(element['money']);
        }else {
          this.tongThu += Number(element['money']);
        }
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    })
  }

  async handleAddCategories() {
    if(this.titleCategory == undefined || this.typeCategory == undefined)
    {
      alert('Lỗi nhập thiếu trường');
      return;
    }
    var data = JSON.stringify({
      'Name': this.titleCategory,
      'Type': this.typeCategory
    });
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
    this.titleCategory = undefined;
    this.typeCategory = undefined;
    await this.loadData();
    this.spinner.hide();
  }

  async handleAddData() {
    if(this.content == undefined || this.date == undefined || this.money == undefined || this.category == undefined) {
      alert('Nhập thông tin thiếu');
      return;
    }
    this.spinner.show();
    var data = JSON.stringify({
      content: this.content,
      date: this.date,
      categories: this.category,
      money: this.money
    });

    await this.moneyManage.addMoneyManage(data)
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
    this.content = undefined;
    this.date = undefined;
    this.money = undefined;
    this.category = undefined;
    this.spinner.hide();
  }

  async handleDeleteData(key) {
    this.spinner.show();
    await this.moneyManage.deleteMoneyManage(key)
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

  handleChangeMoney() {
    this.spinner.show();
    var data = JSON.stringify({
      keyWallet: this.walletChange,
      note: this.noteChangeWallet,
      money: this.moneyChangeWallet
    });
    this.moneyManage.topupWallet(this.walletOrigin, data)
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
    this.loadData();
    this.spinner.hide();
  }

  formatNumber(number) {
    return Number(number).toLocaleString('en-GB');
  }
}
