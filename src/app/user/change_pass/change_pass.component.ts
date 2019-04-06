import { Component, OnInit } from '@angular/core';
import { ChangePassService } from './change_pass.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change_pass.component.html',
  styleUrls: ['./change_pass.component.css'],
  providers: [ ChangePassService ]
})
export class ChangePassComponent implements OnInit {
  private old_pass:string = '';
  private new_pass:string = '';
  private retype_new_pass:string = '';

  constructor(private change_pass_service:ChangePassService) { }

  ngOnInit() {
     

  }

  handleChangePass() {
    if(this.new_pass !== this.retype_new_pass && this.retype_new_pass !== "")
      Swal.fire('Error', 'New password and retype is not valid', 'error');

    if(this.old_pass === this.new_pass && this.new_pass !== '')
      Swal.fire('Error', 'New password must be different from old password', 'error');
  }


}
