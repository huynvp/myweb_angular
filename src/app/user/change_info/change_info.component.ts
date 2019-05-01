import { Component, OnInit } from '@angular/core';
import { ChangeInfoService } from './change_info.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

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
      var date = new DatePipe('en-US');

      this.name = res['data']['user_name'];
      this.address = res['data']['user_address'];
      this.email = res['data']['user_email'];
      this.birthday = date.transform(res['data']['user_birthday'], 'yyyy-MM-dd');
      this.phone = res['data']['user_phone'];
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
    this.change_info_service.changeInfo(this.name, this.birthday, this.address, this.phone)
    .then(res => {
      if(this.file != null) {
        this.change_info_service.uploadAvatar(this.file)
        .then(data => {
          Swal.fire('Success', 'Change info success', 'success');   
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        Swal.fire('Success', 'Change info success', 'success');   
      }
      this.ngOnInit();
    })
    .catch(err => {
      Swal.fire('Error', 'Change info error', 'error');
      console.log(err)
    })
  }


}
