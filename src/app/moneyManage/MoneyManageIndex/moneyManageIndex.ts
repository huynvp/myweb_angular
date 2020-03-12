import { Component, OnInit, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoneyManageService } from '../moneyManageIndex.service';
import { BaseComponent } from 'src/shread/base.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';
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

  keyUpdate:any;
  dateUpdate:any;
  categoriesUpdate:any;
  moneyUpdate:any;
  contentUpdate:any;

  dateRange:any;
  walletFilter: any;
  contentFilter: any;
  dateFormat:any = "yyyy/MM/dd";

  isVisibleModalTopup: boolean  = false;
  isVisibleModalEdit: boolean=false;
  isVisibleModalAdd: boolean=false;
  isVisibleModalFilter: boolean=false;

  convertDateToString(dateStr: string) {
    if (dateStr === null || dateStr === '' || dateStr === undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }

  convertDateToString2(dateStr: string) {
    if (dateStr === null || dateStr === '' || dateStr === undefined) {
      var date = new Date();
      return '';
    }
    else {
      var date = new Date(dateStr);
    }
    return dateStr.substring(0, 10);
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

  constructor(private i18n: NzI18nService, private moneyManage: MoneyManageService, private spinner: NgxSpinnerService, public dialog: MatDialog, public router: Router, public http: HttpClient) {
    super(router, http);
  }

  async ngOnInit() {
    this.i18n.setLocale(en_US)
    await this.loadData();
  }

  async loadData() {
    this.spinner.show();
    await this.showCategories();
    await this.showTable(['','']);
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

  // Modal topup wallet
  showModalTopup() {
    this.isVisibleModalTopup = true;
  }

  closeModalTopup() {
    this.isVisibleModalTopup = false;
  }

  chooseModalTopup() {
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
    this.isVisibleModalTopup = false;
  }
  //end modal topup

  // Modal edit
  showModalEdit() {
    this.isVisibleModalEdit = true;
  }

  closeModalEdit() {
    this.isVisibleModalEdit = false;
  }

  chooseModalEdit() {
    this.isVisibleModalEdit = false;
    this.spinner.show();
    var data = JSON.stringify({
      content: this.contentUpdate,
      money: this.moneyUpdate,
      date: this.convertDateToString(this.dateUpdate),
      categories: this.categoriesUpdate
    });
    this.moneyManage.editMoneyManage(this.keyUpdate, data)
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

  onChangeDateEdit(event) {
    console.log(event);
  }
  // End modal edit

  // Modal add 
  showModalAdd() {
    this.isVisibleModalAdd = true;
  }

  closeModalAdd() {
    this.isVisibleModalAdd = false;
  }

  async chooseModalAdd() {
    this.isVisibleModalAdd = false;
    if(this.content == undefined || this.date == undefined || this.money == undefined || this.category == undefined) {
      alert('Nhập thông tin thiếu');
      return;
    }
    this.spinner.show();
    var data = JSON.stringify({
      content: this.content,
      date: this.convertDateToString(this.date),
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
  // End modal add 

  // Modal filter
  showModalFilter() {
    this.isVisibleModalFilter = true;
  }

  closeModalFilter() {
    this.isVisibleModalFilter = false;
  }

  chooseModalFilter() {
    var dateRange = ['', ''];
    if(this.dateRange != undefined)
    {
      dateRange = this.dateRange;
    }
    this.showTable(dateRange);
    this.isVisibleModalFilter = false;
  }
  // End Modal filter
  async showTable(dateRange=undefined) {
    var wallet = this.walletFilter;
    var content = this.contentFilter;
    if(this.walletFilter == null || this.walletFilter == undefined)
    {
      wallet = '';
    }
    if(this.contentFilter == null || this.contentFilter == undefined)
    {
      content = '';
    }

    this.dateFilterFrom = dateRange[0];
    this.dateFilterTo = dateRange[1];
    this.tongChi = this.tongThu = 0;
    await this.moneyManage.getListMoneyManage(
      this.convertDateToString(this.dateFilterFrom), 
      this.convertDateToString(this.dateFilterTo), 
      this.typeFilter,
      wallet,
      content
    )
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

  async handleDetailData(key:string) {
    this.showModalEdit();
    this.spinner.show();
    await this.moneyManage.getDetailMoneyManage(key)
    .then(res => {
      var data = res['data'];
      this.keyUpdate = data['key'];
      this.categoriesUpdate = data['categories']['key'];
      this.dateUpdate = new Date(data['date']);
      this.moneyUpdate = data['money'];
      this.contentUpdate = data['content'];
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        message: `Error: ${err.error.message}`,
      }, {
        type: 'danger',
      });
    });
    // await this.loadData();
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

  formatNumber(number) {
    return Number(number).toLocaleString('en-GB');
  }
}
