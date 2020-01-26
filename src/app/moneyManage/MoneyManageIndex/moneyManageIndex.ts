import { Component, OnInit, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoneyManageService } from '../moneyManageIndex.service';
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
export class MoneyManageIndexComponent implements OnInit {
  categorieArr = [
    {
      'key': 1,
      'value': 'Chi',
    },
    {
      'key': 2,
      'value': 'Thu',
    }
  ];
  categories: any;

  titleCategory:any;
  typeCategory: any;
  constructor(private moneyManage: MoneyManageService, private spinner: NgxSpinnerService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.showCategories();
  }

  showCategories() {
    this.moneyManage.getListCategories()
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

  async handleAddCategories() {
    if(this.titleCategory == undefined || this.typeCategory == undefined)
    {
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
    this.spinner.hide();
  }
}
