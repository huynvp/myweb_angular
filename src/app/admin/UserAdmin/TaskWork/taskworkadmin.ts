import { Component, OnInit } from '@angular/core';
import { UserAdminService } from '../useradmin.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComponent } from 'src/shread/base.component';

@Component({
  selector: 'task-work-admin',
  templateUrl: './taskworkadmin.html',
  styleUrls: ['./taskworkadmin.component.css'],
  providers: [
    UserAdminService
  ]
})
export class TaskWorkAdminComponent extends BaseComponent implements OnInit {
  constructor(public router: Router, public http: HttpClient, private user: UserAdminService, private spinner: NgxSpinnerService) {
    super(router, http);
  }

  async ngOnInit() {
    await super.ngOnInit();
    this.spinner.show();
    
    this.spinner.hide();
  }
}
