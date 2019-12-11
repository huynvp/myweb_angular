import { Component, OnInit } from '@angular/core';
import { ChangePassService } from './change_pass.service';
declare var $: any;

@Component({
  selector: 'app-change-pass',
  templateUrl: './change_pass.component.html',
  styleUrls: ['./change_pass.component.css'],
  providers: [ ChangePassService ]
})
export class ChangePassComponent implements OnInit {
  public old_pass:string = '';
  public new_pass:string = '';
  public retype_new_pass:string = '';

  constructor(private change_pass_service:ChangePassService) { }

  ngOnInit() {
     

  }

  handleChangeInput() {
    // if(this.new_pass !== this.retype_new_pass && this.retype_new_pass !== "")
    //   Swal.fire('Error', 'New password and retype is not valid', 'error');

    // if(this.old_pass === this.new_pass && this.new_pass !== '')
    //   Swal.fire('Error', 'New password must be different from old password', 'error');
  }

  handleChangePass() {
    this.change_pass_service.changePass(this.old_pass, this.new_pass)
    .then(res => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        title: 'Success: ',
        message: res['message'],
      }, {
        type: 'success',
      });
    })
    .catch(err => {
      $.notify({
        icon: 'glyphicon glyphicon-remove',
        title: 'Error: ',
        message: err['error']['message'],
      }, {
        type: 'danger',
      });
    });
  }

}
