import { Component, OnInit } from '@angular/core';
import { ChangeInfoService } from './change_info.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-change-info',
  templateUrl: './change_info.component.html',
  styleUrls: ['./change_info.component.css'],
  providers: [ ChangeInfoService ]
})
export class ChangeInfoComponent implements OnInit {
  public name:string = '';
  public address:string = '';
  public email:string = '';
  public birthday:string = '';
  public phone:string = '';
  public file = null;

  constructor(
    private change_info_service: ChangeInfoService,
    private router:Router
    ) { 
  }

  ngOnInit() {
    this.change_info_service.getInfo()
    .then(res => {
      this.name = res['data']['name'];
      this.address = res['data']['address'];
      this.email = res['data']['email'];
      this.birthday = res['data']['birthday'];
      this.phone = res['data']['phone'];
    })
    .catch(err => {
      if(err['status'] === 401) {
        this.router.navigate(['/login']);
      }
    })
  }

  onFileSelected(event) {
    this.file = event.target.files['0'];
  }

  handleChangeInfo() {
    this.change_info_service.changeInfo(this.name, this.birthday, this.address, this.phone, this.file)
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        title: 'Success: ',
        message: `Change info success`,
      }, {
        type: 'success',
      });
      this.ngOnInit();
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        title: 'Error: ',
        message: `Change info error`,
      }, {
        type: 'danger',
      });
      console.log(err)
    })
  }


}
